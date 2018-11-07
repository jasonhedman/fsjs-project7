import React from 'react';

import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = (props) => {
  const results = props.data;
  let photos;
  let notFound
  if(results.length > 0){
    photos = results.map(photo => {
      return <GalleryItem key={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
    })
  } else {
    notFound = <NotFound />
  }




  return(
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
        {notFound}
      </div>
  );
}

export default Gallery;
