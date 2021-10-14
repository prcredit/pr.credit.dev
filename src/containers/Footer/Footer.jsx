import React from "react";
import {CABINET_ROUTES} from "../../config/constants";

import Social from "../../components/Social/Social";

import './Footer.scss';


const links = [
  {anchor: 'aboutUs', title: 'Про нас'},
  {anchor: 'info', title: 'Основна інформація'},
  {anchor: 'team', title: 'Відгуки'},
  {anchor: 'rest', title: 'Продаж ділянок'},
  {anchor: 'contacts', title: 'Контакти'},
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__table">
          <div className="footer__image">
            <img src="/media/images/sections/footer/logotype.png" alt="logotype"/>
          </div>

          <div className="footer__list">
            <p className="footer__title">Швидкий доступ</p>

            {links.map(link =>
              <a
                key={link.anchor}
                href={"#" + link.anchor}
                className="footer__link"
              >
                {link.title}
              </a>
            )}
          </div>

          <div className="footer__list">
            <p className="footer__title">Наши контакты</p>
            <a href={`mailto:${CABINET_ROUTES.mail}`}
               className='footer__link footer__link--mail'
               rel="noopener noreferrer">
              {CABINET_ROUTES.mail}
            </a>

            <Social/>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
