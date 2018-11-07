import React from 'react';
import {Link} from 'react-router-dom';

const InvalidRoute = () => {
  return (
    <>
      <h2>That is not a valid route!</h2>
      <Link to={'/'}> Return home </Link>
    </>
  );
}

export default InvalidRoute;
