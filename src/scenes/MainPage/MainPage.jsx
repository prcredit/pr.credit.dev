import React from 'react';

import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import FAQ from "./components/FAQ/FAQ";
import Contacts from "./components/Contacts/Contacts";
import Directions from "./components/Directions/Directions";

import './MainPage.scss';


const MainPage = () => {
    return (<>
      <Hero />

      <section className="section section-info">
        <div className="container">
          <p className="title">
            Информация о Компании...
          </p>
        </div>
      </section>

      <Directions />

      <Team />

      <FAQ />

      <Contacts />
    </>);
};
export default MainPage;
