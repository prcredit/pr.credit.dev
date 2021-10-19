import React from 'react';
import './MainPage.scss';
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import FAQ from "./components/FAQ/FAQ";
import Contacts from "./components/Contacts/Contacts";
const MainPage = () => {
    return (<>
      <Hero />

      <Team />

      <FAQ />

      <Contacts />
    </>);
};
export default MainPage;
