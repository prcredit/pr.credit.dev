import React from "react";

import './Join.scss';


const Join = () => {
  return (
    <section className="join">
      <div className="container">
        <div className="join__box">
          <div className="join__info">
            <h2 className="title title--small join__title">
              Присоединяйтесь <br/>к&nbsp;<span></span>
            </h2>

            <p className="join__text info-text">
            </p>

            <a 
              href='/'
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
            >
              <span>
                Регистрация
              </span> 
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Join;
