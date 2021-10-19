import React from 'react';
import './Footer.scss';
import Social from "../../components/Social/Social";
const Footer = () => {
  return (<footer id='footer' className="footer">
    <div className="container">
      <div className="footer__top">
        <a className='footer__logotype' href='/#hero'>
          <img src="/media/images/svg/logotype-light.svg" alt=''/>
        </a>

        <nav className="footer__nav">
          <a href='#hero'>
            Головна
          </a>

          <a href='#calculator'>
            Калькулятор
          </a>

          <a href='#conditions'>
            Умови
          </a>

          <a href='#reviews'>
            Відгуки
          </a>

          <a href='#FAQ'>
            FAQ
          </a>

          <a href='#contacts'>
            Контакти
          </a>

        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">Copyright © {new Date().getFullYear()}, PR CREDIT</p>

        <div className="footer__social">
          <p>Зв'яжіться з нами:</p>

          <Social />
        </div>
      </div>
    </div>
  </footer>);
};
export default Footer;
