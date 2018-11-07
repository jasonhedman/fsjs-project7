import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import apiKey from './config';
import axios from 'axios'

import Header from './components/Header';
import Gallery from './components/Gallery';
import InvalidRoute from './components/InvalidRoute';

class App extends Component {
  constructor() {
    super();
    this.search = this.search.bind(this);
    this.state={
      photos:[],
      dogs:[],
      cats:[],
      birds:[],
      loading:true
    }
  }

  componentDidMount(){
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogs: response.data.photos.photo,
          loading: false
        })
      })
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo
        })
      })
      axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=birds&per_page=24&page=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            birds: response.data.photos.photo
          })
        })
  }

  search(search){
    this.setState({
      loading: true
    });
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
  }

  render() {

    return (
      <BrowserRouter>
        <div className="container">
          <Header search={this.search}/>
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <Switch>
                <Route exact path='/' render={()=><Redirect to={'/dogs'}/>} />
                <Route path='/dogs' render={()=><Gallery data={this.state.dogs} search={this.search}/>} />
                <Route path='/cats' render={()=><Gallery data={this.state.cats} search={this.search}/>} />
                <Route path='/birds' render={()=><Gallery data={this.state.birds} search={this.search}/>} />
                <Route path='/search' render={()=><Gallery data={this.state.photos} search={this.search}/>} />
                <Route path='' component={InvalidRoute} />
              </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
