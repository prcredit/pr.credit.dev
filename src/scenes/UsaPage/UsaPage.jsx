import React, {useState} from 'react';

import './UsaPage.scss';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Contacts from "../../components/Contacts/Contacts";
import Call from "../../components/Call/Call";
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
  slidesToShow: 4,
  swipeToSlide: true,
  focusOnSelect: true
};

const sliderSettingsSm2 = {
  slidesToShow: 4,
  swipeToSlide: true,
  focusOnSelect: true
};

const sliderSettingsSm3 = {
  slidesToShow: 4,
  swipeToSlide: true,
  focusOnSelect: true
};

const sliderSettingsSm4 = {
  slidesToShow: 1,
  swipeToSlide: true,
  focusOnSelect: true
};


const UsaPage = () => {

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();
  const [nav4, setNav4] = useState();
  const [nav5, setNav5] = useState();
  const [nav6, setNav6] = useState();
  const [nav7, setNav7] = useState();
  const [nav8, setNav8] = useState();

  return (
    <>
      <SectionTitle
        title='Пригон авто iз США'
        // desc='Пригон автомобiлей iз США'
      />

      <section className="section section-info">
        <div className="container">
          <h6 className="title title--mb">
            Автомобіль вашої мрії з США під ключ.
          </h6>

          <p className="subtitle">
            Хочеш ганяти на крутому автомобілі, але не вистачає коштів? Ми знаємо вихід – замов авто із США разом с «PR
            Credit».
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
                  <img src="/media/images/usa/actual/1/1.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/actual/1/2.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/actual/1/3.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/actual/1/4.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/actual/1/5.jpg" alt=""/>
                </div>
              </Slider>

              <Slider
                asNavFor={nav5}
                ref={(slider6) => setNav6(slider6)}
                {...sliderSettingsSm3}
              >
                <div className='gallery-dots'>
                  <img src="/media/images/usa/actual/1/1.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/actual/1/2.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/actual/1/3.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/actual/1/4.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/actual/1/5.jpg" alt=""/>
                </div>
              </Slider>
            </div>
          </div>

        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <h6 className="title title--light gallery__title">
            Виконані замовлення наших клієнтів
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
                Mercedes GLC 300 4Matic
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
                2016
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
                33 тис. км.
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

            </div>

            <div className="gallery-slider">
              <Slider
                {...sliderSettingsMain}
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
              >
                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/1/1.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/1/2.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/1/3.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/1/4.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/1/5.jpg" alt=""/>
                </div>
              </Slider>

              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                {...sliderSettingsSm1}
              >
                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/1/1.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/1/2.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/1/3.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/1/4.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/1/5.jpg" alt=""/>
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
                Nissan Pathfinder
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
                2016
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
                78 тис. км.
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

            </div>

            <div className="gallery-slider">
              <Slider
                {...sliderSettingsMain}
                asNavFor={nav4}
                ref={(slider3) => setNav3(slider3)}
              >
                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/2/1.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/2/2.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/2/3.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/2/4.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/sold/2/5.jpg" alt=""/>
                </div>
              </Slider>

              <Slider
                asNavFor={nav3}
                ref={(slider4) => setNav4(slider4)}
                {...sliderSettingsSm2}
              >
                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/2/1.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/2/2.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/2/3.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/2/4.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/sold/2/5.jpg" alt=""/>
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
export default UsaPage;
