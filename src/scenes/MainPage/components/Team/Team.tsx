import React, {useState, useEffect, useContext} from "react";
import SlickSlider from 'react-slick';

import './Team.scss';
import classModifier from "../../../../utils/classModifier";

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  centerPadding: '20px',
  // adaptiveHeight: true
};


const Team = () => {


  return (

    <section className="team team__section" id='team'>
      <div className="container">
        <h3 className="title team__title">
          Наші відгуки
        </h3>



      {/*  <TeamList*/}
      {/*    sliderSettings={sliderSettings}*/}
      {/*    slidesToShow={!!mobile && mobile.slidesToShow}*/}
      {/*  >*/}
      {/*    <div*/}
      {/*      className={classModifier('team__item', [isActive && 'show'])}*/}
      {/*      onMouseEnter={() => !isActive && setActiveProduct(id)}*/}
      {/*    >*/}
      {/*      <div className="team__flex">*/}
      {/*        <img src={`/media/images/sections/team/${image}.jpg`} alt="zz"*/}
      {/*             className="team__image"/>*/}

      {/*        <span className="team__name">*/}
      {/*  {name}*/}
      {/*</span>*/}
      {/*      </div>*/}


      {/*      <p className="team__text">*/}
      {/*        {text}*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*  </TeamList>*/}
      </div>
    </section>
  )
};

export default Team;