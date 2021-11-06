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
  slidesToShow: 2,
  swipeToSlide: true,
  focusOnSelect: true
};

const sliderSettingsSm2 = {
  slidesToShow: 1,
  swipeToSlide: true,
  focusOnSelect: true
};


const UsaPage = () => {

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();
  const [nav4, setNav4] = useState();

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
            Продані авто
          </h6>

          <div className="gallery__container">
            <div className="gallery-slider gallery-slider--before">
              <h4 className="gallery-slider__title">
                До
              </h4>

              <Slider
                {...sliderSettingsMain}
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
              >
                <div className='gallery-item'>
                  <img src="/media/images/usa/1-before/1.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/1-before/2.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/1-before/3.jpg" alt=""/>
                </div>

                {/*<div className='gallery-item'>*/}
                {/*  <img src="/media/images/usa/1-before/4.jpg" alt=""/>*/}
                {/*</div>*/}
              </Slider>

              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                {...sliderSettingsSm1}
              >
                <div className='gallery-dots'>
                  <img src="/media/images/usa/1-before/1.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/1-before/2.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/1-before/3.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/1-before/4.jpg" alt=""/>
                </div>
              </Slider>
            </div>

            <div className="gallery-slider__arrow">
              <img src="/media/images/icons/arrow-big.svg" alt=""/>
            </div>

            <div className="gallery-slider gallery-slider--after">
              <h4 className="gallery-slider__title">
                Після
              </h4>

              <Slider
                {...sliderSettingsMain}
                asNavFor={nav4}
                ref={(slider3) => setNav3(slider3)}
              >
                <div className='gallery-item'>
                  <img src="/media/images/usa/1-after/1.jpg" alt=""/>
                </div>

                <div className='gallery-item'>
                  <img src="/media/images/usa/1-after/2.jpg" alt=""/>
                </div>
              </Slider>

              <Slider
                asNavFor={nav3}
                ref={(slider4) => setNav4(slider4)}
                {...sliderSettingsSm2}
              >
                <div className='gallery-dots'>
                  <img src="/media/images/usa/1-after/1.jpg" alt=""/>
                </div>

                <div className='gallery-dots'>
                  <img src="/media/images/usa/1-after/2.jpg" alt=""/>
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
