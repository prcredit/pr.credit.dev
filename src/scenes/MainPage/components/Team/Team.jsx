import React from "react";
import SlickSlider from 'react-slick';
import './Team.scss';

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: '20px',
  // adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};
const Team = () => {
  return (
    <section className="section team team__section" id='reviews'>
    <div className="container">
      <h3 className="title team__title">
        Наші відгуки
      </h3>

      <SlickSlider {...sliderSettings}>
        <div className='team__item'>
          <div className="team__flex">
            <img src={`/media/images/sections/reviews/1.jpg`} alt="" className="team__image"/>

            <span className="team__name">
                Андрій
              </span>
          </div>
          <p className="team__text">
            Особисто для мене єдине джерело кредитування – «PR Credit. Звертаюся сюди з регулярною сталістю. І жодного разу мене тут не підвели. Відсотки перерахують буквально щодня. Усім, кому відмовили в банках, рекомендую звертатися лише до «PR Credit».
          </p>
        </div>
        <div className='team__item'>
          <div className="team__flex">
            <img src={`/media/images/sections/reviews/0.jpg`} alt="" className="team__image"/>

            <span className="team__name">
                Микола
              </span>
          </div>
          <p className="team__text">
            Доброго дня, хотів би подякувати «PR Credit» залишився дуже задоволеним. Знайшов їх сайт, зателефонував, обговорили всі деталі, вислали фотографії на вайбер, домовилися через 2 дні зустрітись. Оформлення зайняло півгодини, зробили все дуже швидко. Дякую і удачі!
          </p>
        </div>
        <div className='team__item'>
          <div className="team__flex">
            <img src={`/media/images/sections/reviews/2.jpg`} alt="" className="team__image"/>

            <span className="team__name">
                Володимир
              </span>
          </div>
          <p className="team__text">
            Мені сподобався принцип роботи. Підібрали потрібний варіант для мого бюджету. Вислали відеозвіт. Перевірили мою машинку і зателефонували мені з доповіддю за станом (був приємно здивований докладним описом). Авто виявилося цілком гідним. Респект!
          </p>
        </div>
        <div className='team__item'>
          <div className="team__flex">
            <img src={`/media/images/sections/reviews/3.jpg`} alt="" className="team__image"/>

            <span className="team__name">
                Юрій
              </span>
          </div>
          <p className="team__text">
            Хороша компанія, знайшли машину, згідно з моїми вимогами, авто приїхало в обіцяні терміни, допомогли з оформленням. Допомогли з відновленням! Залишилися лише гарні враження! Наступне авто купуватиму тільки через цю компанію!
          </p>
        </div>
        <div className='team__item'>
          <div className="team__flex">
            <img src={`/media/images/sections/reviews/4.jpg`} alt="" className="team__image"/>

            <span className="team__name">
                Дмитро
              </span>
          </div>
          <p className="team__text">
            Спочатку я не мав довіри до автоломбардів. Але склалася така ситуація, що гроші були потрібні терміново. Звернувся до компанії «PR Credit» і не пошкодував. Гроші видали готівкою та швидко. Моя не ідеальна кредитна історія нікого не збентежила. Рекомендую!
          </p>
        </div>
      </SlickSlider>

    </div>
  </section>
  );
};
export default Team;
