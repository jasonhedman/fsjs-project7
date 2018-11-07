import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

const Header = (props) => {
  return (
    <>
      <SearchBar search={props.search}/>
      <Nav />
    </>
  );
}

export default Header;
