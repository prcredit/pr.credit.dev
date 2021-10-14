import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import {CABINET_ROUTES, ROUTES} from "../../config/constants";
import classModifier from "../../utils/classModifier";

import './Header.scss';


const links = [
  {anchor: 'aboutUs', title: 'Про нас'},
  {anchor: 'info', title: 'Основна інформація'},
  {anchor: 'team', title: 'Відгуки'},
  {anchor: 'rest', title: 'Продаж ділянок'},
  {anchor: 'contacts', title: 'Контакти'},
]


const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <header className={classModifier('header', [isOpenMenu && 'open'])} id='#header'>
      <button
        className={classModifier('header__mobile-menu', [isOpenMenu && 'open'])}
        onClick={() => setOpenMenu(!isOpenMenu)}
      >
        <svg width="18" height="17" fill="none" data-if-close>
          <path
            d="M3.5 0a3.5 3.5 0 10.01 7.01A3.5 3.5 0 003.5 0zM13.85 0a3.5 3.5 0 10.01 7.01 3.5 3.5 0 000-7.01zM3.5 9.65a3.5 3.5 0 10.01 7 3.5 3.5 0 00-.01-7zM13.85 9.65a3.5 3.5 0 10.01 7 3.5 3.5 0 000-7z"
            fill="#33aa7e"
          />
        </svg>

        <svg width="24" height="24" fill="none" data-if-open>
          <path d="M18 6L6 18M6 6l12 12" stroke="#33aa7e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <img className='header__logo'
           src="/media/images/logotype.png"
           alt="Dolyna Ozer Image"
      />

      <div className={classModifier('header__nav', [isOpenMenu && 'open'])}>

        {links.map(link =>
          <a
            key={link.anchor}
            href={"#" + link.anchor}
            className="header__nav-item" // TODO: active if we scrolled to container
            onClick={() => setOpenMenu(false)}
          >
            {link.title}
          </a>
        )}

        {/*<NavLink*/}
        {/*  exact*/}
        {/*  to={ROUTES.news}*/}
        {/*  className="header__nav-item hidden"*/}
        {/*>*/}
        {/*  Новости*/}
        {/*</NavLink>*/}
      </div>

      <a
        href={CABINET_ROUTES.number}
        className="header__go-to-cabinet"
        rel="noopener noreferrer"
      >
        <span data-desktop>
          Зателефонувати
        </span>

        <svg className='phone-icon' data-mobile xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.64 513.64">
          <path
            d="M499.66 376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36 17.92-7.68 23.041-33.28 35.841-56.32 30.72-51.2-12.8-120.32-79.36-133.12-133.12-7.68-23.041 7.68-48.641 30.72-56.32 33.28-10.24 43.52-53.76 17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12 0L18.38 62.08c-48.64 51.2 5.12 186.88 125.44 307.2s256 176.641 307.2 125.44l48.64-48.64c17.921-20.48 17.921-51.2 0-69.12z"/>
        </svg>
      </a>
    </header>
  )
};

export default Header;