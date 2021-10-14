import React from "react";

import {CABINET_ROUTES} from "../../config/constants";

import './Rest.scss';


const Rest = () => {
  return (
    <section id="rest" className="rest">
      <div className="container">

        <div className="rest__items">
          <div className="rest-gallery">
            <div className="rest-gallery__wrap">
              <div className="box a"/>
              <div className="box b"/>
              <div className="box c"/>
              <div className="box d"/>
            </div>

            <a
              href='/'
              target="_blank"
              className="link-btn link-btn--light rest-gallery__link-btn hidden"
              rel="noopener noreferrer"
            >
              <span>
                Перейти у галарею
              </span>
            </a>
          </div>

          <div className="rest-sale">
            <div className="rest-sale__image"/>

            <div className='rest-sale__content'>
              <h6 className="rest-sale__title">
                Продаж ділянок
              </h6>

              <p className="rest-sale__text">
                Також на території Долини Озер Ви маєте змогу придбати власну ділянку землі та створити свій рай на землі.
                Всі подробиці Ви можете дізнатися за
                <a href={CABINET_ROUTES.number}> телефоном</a>.
              </p>

              <p className="rest-sale__subtitle">
                Схема території:
              </p>

              <a href="/media/documents/dolyna-ozer-sale.pdf"
                 target='_blank'
                 rel="noopener noreferrer"
                 className='rest-sale__link'
              >
                <img src="/media/images/sections/rest/sale.png" alt="Dolyna Ozer Image"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
};

export default Rest;
