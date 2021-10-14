import React, {useState, useEffect, useContext} from "react";
import SlickSlider from 'react-slick';

import './Team.scss';
import TeamItem from './components/TeamItem';
import {MultiLangContext} from "../../context/MultiLang/MultiLang";


const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  centerPadding: '20px',
  // adaptiveHeight: true
};

const TeamListMobile = (props) => (
  <SlickSlider
    {...props.sliderSettings}
    slidesToShow={props.slidesToShow}
  >
    {props.children}
  </SlickSlider>
);
const TeamListDesktop = (props) => <div className="team__list">{props.children}</div>;

const Team = () => {
  const {
    words,
  } = useContext(MultiLangContext);

  const [activeProduct, setActiveProduct] = useState('sincere_systems');
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;

      if (width > 1200) {
        setMobile(null);
      } else if (width > 900) {
        setMobile({slidesToShow: 3});
      } else if (width > 600) {
        setMobile({slidesToShow: 2});
      } else {
        setMobile({slidesToShow: 1});
      }
    }

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);

  const TeamList = mobile
    ? TeamListMobile
    : TeamListDesktop;

  return (

    <section className="team team__section" id='team'>
      <div className="container">
        <h3 className="title team__title">
          Наші відгуки
        </h3>

        <TeamList
          sliderSettings={sliderSettings}
          slidesToShow={!!mobile && mobile.slidesToShow}
        >
          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='0'
            image='0'
            setActiveProduct={setActiveProduct}
            name='Павло Чугунов'
            position={1}
            text='
            Рекомендую всім Долину Озер! Чудові умови, багато риби та великі альтанки в яких можна посидіти та поїсти смачну рибку.
            '
          />

          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='1'
            image='1'
            setActiveProduct={setActiveProduct}
            name='Валентина Шунько'
            position={1}
            text='
              Вирішила поїхати з чоловіком на риболовлю та була дуже приємно здивована! Адже поки він ловив рибу - я насолоджувалась чудовими краєвидами. Так що дівчата, риболовля - це не така нудна справа як ми всі думаємо!
            '
          />

          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='2'
            image='2'
            setActiveProduct={setActiveProduct}
            name='Геннадій Дикий'
            position={1}
            text='
              Хороше місце для дійсно якісної риболовлі. Були з хлопцями, кожен спімав по рибині, всі залишись задоволені! Рекомендую!
            '
          />

          <TeamItem
            isActive={!!mobile || activeProduct === ''}
            id='3'
            image='3'
            setActiveProduct={setActiveProduct}
            name='Юрій Григорович'
            position={1}
            text='
            Їздили на вихідних на риболовлю разом з друзями, все сподобалось. Того дня спімали чимало риби, тому вже не дочекаюсь наступної поїздки та смачної риби від дружини.
             '
          />

        </TeamList>
      </div>
    </section>
  )
};

export default Team;