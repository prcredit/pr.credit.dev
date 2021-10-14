import React from 'react';

import './LocalLoader.scss';


const LocalLoader = () => {
  return (
    <div className="loader">
      <div className="loader__circle">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  )
}

export default LocalLoader;