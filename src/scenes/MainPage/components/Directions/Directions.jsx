import React from "react";
import './Directions.scss';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../../config/constants";

const Directions = () => {

  return (<section className='section section-directions'>
    <div className="container">
      <h1 className="title title--light directions__title">
        Види послуг
      </h1>

      <div className="directions">

        <NavLink to={ROUTES.pawnshop}
                 className="directions-item"
                 datatype='pawnshop'
        >
          <h6 className="directions-item__title">
            Автоломбард
          </h6>
        </NavLink>

        <NavLink to={ROUTES.trading}
                 className="directions-item"
                 datatype='pawnshop'
        >
          <h6 className="directions-item__title">
            Продаж авто
          </h6>
        </NavLink>

        <NavLink to={ROUTES.usa}
                 className="directions-item"
                 datatype='pawnshop'
        >
          <h6 className="directions-item__title">
            Пригон авто iз США
          </h6>
        </NavLink>
      </div>
    </div>
  </section>);
};
export default Directions;
