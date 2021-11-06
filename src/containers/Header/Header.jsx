import React, { useContext, useEffect, useState } from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
import { LINK_ROUTES, ROUTES, MEDIA_SIZES } from '../../config/constants';
import { classGenerator } from '../../utils';
import { MultiLangContext } from '../../context/MultiLang/MultiLang';
import { useCheckWindowSize } from '../../hooks';
import { useHistory } from 'react-router-dom';
import checkerRedirect from "../../utils/checkerRedirect";
import './Header.scss';
const Header = (props) => {
  const history = useHistory();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const { selectedLang, changeLang, } = useContext(MultiLangContext);
  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.tablet);
  const mobileChangeLang = (lang) => {
    changeLang(lang);
    if (!isDesktop) {
      setOpenMenu(!isOpenMenu);
    }
  };
  const mobileUnchor = () => {
    if (!isDesktop) {
      setOpenMenu(!isOpenMenu);
    }
  };
  useEffect(() => {
    const lang = checkerRedirect(history.location.search).lang;
    !!lang && changeLang(lang);
    // eslint-disable-next-line
  }, [history.location.search]);
  return (<>
    <header className="header">
      <div className="header__container">
        <button className={classGenerator('header__bars', [isOpenMenu && 'open'])} onClick={() => setOpenMenu(!isOpenMenu)}/>

        <a className='header__logotype' href='/#hero'/>

        <div className="header__nav-wrapper">
          <nav className="header__nav">
            <div className="header__links">

              <Link to={ROUTES.main} onClick={() => mobileUnchor()}>
                Головна
              </Link>

              <Link to={ROUTES.pawnshop} onClick={() => mobileUnchor()}>
                Автоломбард
              </Link>

              <Link to={ROUTES.trading} onClick={() => mobileUnchor()}>
                Купiвля/продаж авто
              </Link>

              <Link to={ROUTES.usa} onClick={() => mobileUnchor()}>
                Пригон авто iз США
              </Link>

              <Link to={ROUTES.contacts} onClick={() => mobileUnchor()}>
                Контакти
              </Link>
            </div>

            <a href={`tel:${LINK_ROUTES.contacts.number}`} className="link-btn link-btn--dark link-btn--sm" rel="noopener noreferrer">
            <span>
              Зателефонувати
            </span>

              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M15.5646 11.7424L13.3317 9.50954C12.5343 8.71209 11.1786 9.0311 10.8596 10.0678C10.6204 10.7855 9.82296 11.1842 9.10526 11.0247C7.51037 10.626 5.35726 8.5526 4.95854 6.87797C4.71931 6.16024 5.19778 5.36279 5.91548 5.12359C6.95216 4.80461 7.27113 3.44895 6.47369 2.65151L4.24084 0.418659C3.60288 -0.139553 2.64595 -0.139553 2.08774 0.418659L0.572591 1.93381C-0.942555 3.5287 0.73208 7.75516 4.48007 11.5032C8.22807 15.2511 12.4545 17.0056 14.0494 15.4106L15.5646 13.8955C16.1228 13.2575 16.1228 12.3006 15.5646 11.7424Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>


          </nav>
        </div>
      </div>
    </header>
  </>);
};
export default withRouter(Header);
