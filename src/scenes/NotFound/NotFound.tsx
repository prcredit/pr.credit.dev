import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import {ROUTES} from "../../config/constants";
import {MultiLangContext} from "../../context/MultiLang/MultiLang";

import './NotFound.scss';


const NotFound = () => {
  const {words} = useContext(MultiLangContext);


  return (
    <section className="section">
      <div className="container">
        <div className="not-found">
          <h3 className='title'>
            {words.noResults}
          </h3>

          <p className='text not-found__text'>
            {words.specifyRequest}
          </p>

          <img className='not-found__image'
               src="/media/images/svg/not-found.svg"
               alt=""/>

          <NavLink className='button button--home'
                   to={ROUTES.main}>
            <span>{words.backToMain}</span>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default NotFound;