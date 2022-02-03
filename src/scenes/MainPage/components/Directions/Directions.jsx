import React from "react";
import './Directions.scss';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../../config/constants";

const Directions = () => {

  return (<section id="directions" className='section section-directions'>
    <div className="container">
      <h1 className="title title--light directions__title">
        Види послуг
      </h1>

      <div className="directions">

        <a href={ROUTES.pawnshop}
                 className="directions-item"
                 datatype='pawnshop'
        >
          <h6 className="directions-item__title">
            Автоломбард
          </h6>
        </a>

        <a href={ROUTES.trading}
                 className="directions-item"
                 datatype='pawnshop'
        >
          <h6 className="directions-item__title">
            Купiвля/продаж авто
          </h6>
        </a>

        <a href={ROUTES.usa}
                 className="directions-item"
                 datatype='pawnshop'
        >
          <h6 className="directions-item__title">
            Пригон авто iз США
          </h6>
        </a>
      </div>
    </div>
  </section>);
};
export default Directions;
