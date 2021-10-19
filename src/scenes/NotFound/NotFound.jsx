import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/constants";
import { MultiLangContext } from "../../context/MultiLang/MultiLang";
import './NotFound.scss';
const NotFound = () => {
    const { words } = useContext(MultiLangContext);
    return (<section className="section">
      <div className="container">
        <div className="not-found">
          <h3 className='title'>
            Error 404
          </h3>

          <p className='text not-found__text'>
            К сожалению, запрашиваемая Вами страница не найдена..
          </p>

          <img className='not-found__image' src="/media/images/svg/not-found.svg" alt=""/>

          <NavLink className='button button--home' to={ROUTES.main}>
            <span>backToMain</span>
          </NavLink>
        </div>
      </div>
    </section>);
};
export default NotFound;
