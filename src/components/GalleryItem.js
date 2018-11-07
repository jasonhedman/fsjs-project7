import React from 'react';

const GalleryItem = (props) => {
  return(
    <li>
      <img src={props.src} alt="" />
    </li>
  );
}

export default GalleryItem;
