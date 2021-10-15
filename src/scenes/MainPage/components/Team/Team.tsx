import React, {useState, useEffect, useContext} from "react";
import SlickSlider from 'react-slick';

import './Team.scss';
import classModifier from "../../../../utils/classModifier";

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
              <img src={`/media/images/sections/reviews/1.jpg`} alt=""
                   className="team__image"/>

              <span className="team__name">
                Анастасия
              </span>
            </div>
            <p className="team__text">
              Надежный автоломбард, проверенный не только мной, но и моими знакомыми.<br/> Процесс получения кредита очень простой и прозрачный, никаких справок о доходах, кредитных историй и прочей бумажной волокиты.<br/> Реально круто!
            </p>
          </div>
          <div className='team__item'>
            <div className="team__flex">
              <img src={`/media/images/sections/reviews/0.jpg`} alt=""
                   className="team__image"/>

              <span className="team__name">
                Дмитрий
              </span>
            </div>
            <p className="team__text">
              Честная организация, в этом убедился лично.<br/> Все условия созданы в отношении клиента, есть возможность взять отсрочку.<br/> В общем, мне помогли, я благодарен!
            </p>
          </div>
          <div className='team__item'>
            <div className="team__flex">
              <img src={`/media/images/sections/reviews/2.jpg`} alt=""
                   className="team__image"/>

              <span className="team__name">
                Андрей
              </span>
            </div>
            <p className="team__text">
              Вся процедура оформления кредита прозрачная и легкая, не надо никаких лишних бумажек и подписей.<br/> Отличный персонал, консультирует корректно и вежливо по любому интересующему вопросу.
            </p>
          </div>
          <div className='team__item'>
            <div className="team__flex">
              <img src={`/media/images/sections/reviews/3.jpg`} alt=""
                   className="team__image"/>

              <span className="team__name">
                Геннадий
              </span>
            </div>
            <p className="team__text">
              Всем рекомендую кредитное агенство "PR CREDIT"-так как в нем работают профессионалы-ребята компетентны в своем деле,что сразу порадовало!!!<br/>
              Спасибо,вам "PR CREDIT"-за человеческий и профессиональный подход!!!
              </p>
          </div>
          <div className='team__item'>
            <div className="team__flex">
              <img src={`/media/images/sections/reviews/4.jpg`} alt=""
                   className="team__image"/>

              <span className="team__name">
                Карина
              </span>
            </div>
            <p className="team__text">
              Здесь очень удобные условия, нет необходимости оставлять автомобиль в ломбарде, есть возможность взять отсрочку платежа и погасить задолженность полностью позже.
            </p>
          </div>
        </SlickSlider>

      </div>
    </section>
  )
};

export default Team;