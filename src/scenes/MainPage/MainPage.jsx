import React from 'react';

import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Call from "../../components/Call/Call";
import Contacts from "../../components/Contacts/Contacts";
import Directions from "./components/Directions/Directions";

import './MainPage.scss';


const MainPage = () => {
  return (<>
    <Hero/>

    <section className="section section-info">
      <div className="container">
        <h6 className="title title--mb">
          Інформація про компанію
        </h6>

        <p className="subtitle">
          PR Credit пропонує співпрацю лише на прозорих умовах і законних підставах. Ми цінуємо кожного, хто звернувся до нас за питанням
          автоломбарду, викупу/продажу авто та пригону авто із США.
          Ми запропонуємо індивідуальний підхід на максимально вигідних умовах для кожного клієнта.
        </p>
      </div>
    </section>

    <Directions/>

    <Team/>

    <Call/>

    <Contacts/>
  </>);
};
export default MainPage;
