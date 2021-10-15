import React, { useContext, useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { LINK_ROUTES, ROUTES, MEDIA_SIZES } from '../../config/constants';
import { classGenerator } from '../../utils';
import { MultiLangContext } from '../../context/MultiLang/MultiLang';
import { useCheckWindowSize } from '../../hooks';
import {useHistory} from 'react-router-dom';

import checkerRedirect from "../../utils/checkerRedirect";

import './Header.scss';


const Header = (props: any) => {
  const history = useHistory();
  const [isOpenMenu, setOpenMenu] = useState(false);

  const {
    selectedLang,
    changeLang,
  } = useContext(MultiLangContext);

  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.tablet);

  const mobileChangeLang = (lang: string) => {
    changeLang(lang);
    if (!isDesktop) {
      setOpenMenu(!isOpenMenu);
    }
  }

  useEffect(() => {
    const lang = checkerRedirect(history.location.search).lang;

    !!lang && changeLang(lang);
    // eslint-disable-next-line
  }, [history.location.search])


  return (
    <>
      <header className="header">
        <div className="header__container">
          <button
            className={classGenerator('header__bars', [isOpenMenu && 'open'])}
            onClick={() => setOpenMenu(!isOpenMenu)}
          />

          <NavLink className='header__logotype'
                   to={{
                     pathname: ROUTES.main,
                     hash: "#statistic",
                   }}/>

          <div className="header__nav-wrapper">
            <nav className="header__nav">
              <div className="header__links">
                <a href='/' className="header__link--active">
                  S-Explorer
                </a>

                <a href={''}
                   target='_blank' rel="noopener noreferrer">
                  S-Token
                </a>

                {/* temp fix jira-294 */}
                {/*<a href={LINK_ROUTES.walletCabinet}*/}
                {/*   target='_blank' rel="noopener noreferrer">*/}
                {/*  S-Wallet*/}
                {/*</a>*/}
              </div>

              <div className="header__select select">
                <div
                  className={classGenerator('select__current', [
                    selectedLang === 'ru' && 'ru',
                    selectedLang === 'en' && 'en',
                  ])}
                >
                  <span/>
                </div>

                <ul className="select__countrylist">
                  <li
                    className={classGenerator('select__item select__item_ru', [
                      selectedLang === 'ru' && 'active',
                    ])}
                    onClick={() => mobileChangeLang('ru')}
                  >
                    <img src={`${window.location.origin}/media/images/icons/ru.svg`} alt=""/> <span>Русский</span>
                  </li>

                  <li
                    className={classGenerator('select__item select__item_en', [
                      selectedLang === 'en' && 'active',
                    ])}
                    onClick={() => mobileChangeLang('en')}
                  >
                    <img src={`${window.location.origin}/media/images/icons/en.svg`} alt=""/> <span>English</span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
};

export default withRouter(Header);