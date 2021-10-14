import React from "react";

import './AboutUs.scss';
import {CABINET_ROUTES} from "../../config/constants";


const AboutUs = () => {

  return (
    <section className="about" id='aboutUs'>
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <h2 className="title about__title">Про нас</h2>

            <h4 className="subtitle about__subtitle">
              Характеристики <span>Долини Озер</span>
            </h4>

            <p className="text">
              Площа дзеркала води — 6 га.
            </p>

            <p className="text">
              Максимальна глибина озер — 3.5 м.
            </p>

            <p className="text">
              Зариблення — постійно.
            </p>

            <p className="text">
              Озеро харчується джерелами і струмком.
            </p>

            <p className="text">
              Види риболовлі: аматорська, спортивна та риболовля на хижака.
            </p>
          </div>

          <div className="about__right">
            <img
              src="/media/images/sections/about-us/image.jpg"
              alt="about-us"
              className='about__image'/>

            <a href={CABINET_ROUTES.youtubeVideo}
               target='_blank'
               rel="noopener noreferrer"
               className="about__video"/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutUs;