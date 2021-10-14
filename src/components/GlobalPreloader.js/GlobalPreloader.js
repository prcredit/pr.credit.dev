import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import usePrevious from '../../hooks/usePrevious';

import './GlobalPreloader.scss';


const GlobalPreloader = props => {
  const pathname = props.location.pathname;
  const [loadingStatus, setLoadingStatus] = useState(0);

  const prevPathname = usePrevious(pathname);

  useEffect(() => {
    setLoadingStatus(0);
    window.scrollTo(0, 0);

    const images = document.images;
    let i = images.length;
    let loadedImagesCount = 0;

    const onLoadImage = () => {
      loadedImagesCount++;

      if (loadedImagesCount >= images.length) {
        setTimeout(() => setLoadingStatus(100), 500);
      }
      else {
        setLoadingStatus(Math.floor(loadedImagesCount / images.length * 100));
      }
    }

    while (i--) {
      const imageClone = new Image();
      imageClone.onload = onLoadImage;
      imageClone.onerror = onLoadImage;
      imageClone.src = images[i].src;
    }
  }, [pathname]);

  const isLoaded = loadingStatus >= 100 && prevPathname === pathname;

  return (<>
    <div
      className="main-overlay"
      style={isLoaded ? { display: 'none' } : null}
    />

    <div className={'preloader' + (isLoaded ? ' done' : '')}>
      <div className="preloader__box">
        <div className="preloader__dot preloader__dot-1" />
        <div className="preloader__dot preloader__dot-2" />
        <div className="preloader__dot preloader__dot-3" />
      </div>

      <div className="preloader__perc">
        <span className="preloader__perc_num">{loadingStatus}</span>%
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
          </filter>
        </defs>
      </svg>
    </div>
  </>)
};

export default withRouter(GlobalPreloader);