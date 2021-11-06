import React, {useState} from 'react';

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Contacts from "../../components/Contacts/Contacts";
import Call from "../../components/Call/Call";
import './TradingPage.scss';
import Slider from "react-slick";


const sliderSettingsMain = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '20px',
  adaptiveHeight: true,
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1-before,
  //     }
  //   }
  // ]
};

const sliderSettingsSm1 = {
  slidesToShow: 3,
  swipeToSlide: true,
  focusOnSelect: true
};

const sliderSettingsSm2 = {
  slidesToShow: 6,
  swipeToSlide: true,
  focusOnSelect: true
};

const sliderSettingsSm3 = {
  slidesToShow: 3,
  swipeToSlide: true,
  focusOnSelect: true
};


const TradingPage = () => {

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();
  const [nav4, setNav4] = useState();
  const [nav5, setNav5] = useState();
  const [nav6, setNav6] = useState();

  return (<>
      <SectionTitle
        title='Купiвля/продаж авто'
        // desc='Викуп та продаж автомобiлей'
      />

      <section className="section section-info">
        <div className="container">
          <h6 className="title title--mb">
            Купуй дешево, продавай дорого!
          </h6>

          <p className="subtitle">
            Вам терміново потрібна готівка, але немає часу продавати машину самостійно? Викупимо Ваше авто дорого! Продай авто за 15 хвилин та отримай до 95% вартості автомобіля. Також ти можеш придбати круте авто прямо у нас.
          </p>
        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <h6 className="title title--light gallery__title">
            Актуальні пропозиції для покупки
          </h6>

          <div className="gallery__container">
            <div className="gallery-info">
              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/name.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    назва
                  </p>

                  <span className="gallery-info__desc">
                Toyota Camry 3,5
              </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/year.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Рік випуску
                  </p>

                  <span className="gallery-info__desc">
                2007
              </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/time.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Пробіг
                  </p>

                  <span className="gallery-info__desc">
                238 тис. км.
              </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/box.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Коробка
                  </p>

                  <span className="gallery-info__desc">
                  Автомат
                </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/dollar.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Ціна
                  </p>

                  <span className="gallery-info__desc">
                  $ 10,800
                </span>
                </div>
              </div>

            </div>

            <div className="gallery-slider">
              <Slider
                {...sliderSettingsMain}
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
              >
                <div className='gallery-item'>
                  <img src="/media/images/trading/1/1.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/1/2.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/1/3.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/1/4.jpg" alt=""/>
                </div>
              </Slider>

              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                {...sliderSettingsSm1}
              >
                <div className='gallery-dots'>
                  <img src="/media/images/trading/1/1.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/1/2.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/1/3.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/1/4.jpg" alt=""/>
                </div>
              </Slider>
            </div>
          </div>

          <div className="gallery__container">
            <div className="gallery-info">
              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/name.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    назва
                  </p>

                  <span className="gallery-info__desc">
                    Mercedes S500 Long AMG 4Matic
                  </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/year.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Рік випуску
                  </p>

                  <span className="gallery-info__desc">
                    2007
                  </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/time.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Пробіг
                  </p>

                  <span className="gallery-info__desc">
                  235 тис. км.
                </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/box.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Коробка
                  </p>

                  <span className="gallery-info__desc">
                    Автомат
                  </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/dollar.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Ціна
                  </p>

                  <span className="gallery-info__desc">
                    $ 11,900
                  </span>
                </div>
              </div>

            </div>

            <div className="gallery-slider">
              <Slider
                {...sliderSettingsMain}
                asNavFor={nav4}
                ref={(slider3) => setNav3(slider3)}
              >
                <div className='gallery-item'>
                  <img src="/media/images/trading/2/1.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/2/2.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/2/3.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/2/4.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/2/5.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/2/6.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/2/7.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/2/8.jpg" alt=""/>
                </div>
              </Slider>

              <Slider
                asNavFor={nav3}
                ref={(slider4) => setNav4(slider4)}
                {...sliderSettingsSm2}
              >
                <div className='gallery-dots'>
                  <img src="/media/images/trading/2/1.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/2/2.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/2/3.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/2/4.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/2/5.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/2/6.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/2/7.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/2/8.jpg" alt=""/>
                </div>
              </Slider>
            </div>
          </div>

          <div className="gallery__container">
            <div className="gallery-info">
              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/name.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    назва
                  </p>

                  <span className="gallery-info__desc">
                    Lexus NX300 F-Sport
                  </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/year.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Рік випуску
                  </p>

                  <span className="gallery-info__desc">
                    2020
                  </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/time.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Пробіг
                  </p>

                  <span className="gallery-info__desc">
                    22 тис. км.
                  </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/box.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Коробка
                  </p>

                  <span className="gallery-info__desc">
                    Автомат
                  </span>
                </div>
              </div>

              <div className="gallery-info__item">
                <div className="gallery-info__icon">
                  <img src="/media/images/trading/dollar.svg" alt=""/>
                </div>

                <div className="gallery-info__text">
                  <p className="gallery-info__title">
                    Ціна
                  </p>

                  <span className="gallery-info__desc">
                    $ 37,900
                  </span>
                </div>
              </div>

            </div>

            <div className="gallery-slider">
              <Slider
                {...sliderSettingsMain}
                asNavFor={nav6}
                ref={(slider5) => setNav5(slider5)}
              >
                <div className='gallery-item'>
                  <img src="/media/images/trading/3/1.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/3/2.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/3/3.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/trading/3/4.jpg" alt=""/>
                </div>
              </Slider>

              <Slider
                asNavFor={nav5}
                ref={(slider6) => setNav6(slider6)}
                {...sliderSettingsSm3}
              >
                <div className='gallery-dots'>
                  <img src="/media/images/trading/3/1.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/3/2.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/3/3.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/trading/3/4.jpg" alt=""/>
                </div>
              </Slider>
            </div>
          </div>

        </div>
      </section>

      <Call/>

      <Contacts/>
    </>
  );
};
export default TradingPage;
