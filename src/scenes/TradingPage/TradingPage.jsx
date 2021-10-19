import React from 'react';
import './TradingPage.scss';
import SectionTitle from "../MainPage/components/SectionTitle/SectionTitle";
import Conditions from "../MainPage/components/Conditions/Conditions";
import FAQ from "../MainPage/components/FAQ/FAQ";
const TradingPage = () => {
    return (<>
      <SectionTitle title='Викуп/продаж авто' desc='Викуп та продаж автомобiлей'/>

      <section className="section section-info">
        <div className="container">
          <p className="title">
            Информация про Викуп/продаж авто...
          </p>
        </div>
      </section>

      <Conditions />

      <FAQ />
    </>);
};
export default TradingPage;
