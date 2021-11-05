import React, {useState} from 'react';

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Contacts from "../../components/Contacts/Contacts";
import Call from "../../components/Call/Call";
import './TradingPage.scss';
import Slider from "react-slick";


const sliderSettings1 = {
  dots: false,
  arrows: false,
  infinite: false,
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
  //       slidesToShow: 1,
  //     }
  //   }
  // ]
};

const sliderSettings2 = {
  slidesToShow: 3,
  swipeToSlide: true,
  focusOnSelect: true
};


const TradingPage = () => {

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (<>
      <SectionTitle
        title='Продаж авто'
        // desc='Викуп та продаж автомобiлей'
      />

      <section className="section section-info">
        <div className="container">
          <h6 className="title title--mb">
            Інформація про продаж авто
          </h6>

          <p className="subtitle">
            dsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsasdsadasadsdasadsadsadsas
          </p>
        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <h6 className="title title--light gallery__title">
            Актуальні пропозиції
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

            </div>

            <div className="gallery-slider">
              <Slider
                {...sliderSettings1}
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
                {...sliderSettings2}
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
        </div>
      </section>

      <Call/>

      <Contacts/>
    </>
  );
};
export default TradingPage;
