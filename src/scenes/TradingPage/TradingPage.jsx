import React from 'react';
import './TradingPage.scss';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Contacts from "../../components/Contacts/Contacts";
import Call from "../../components/Call/Call";
const TradingPage = () => {
    return (<>
      <SectionTitle
        title='Викуп/продаж авто'
        // desc='Викуп та продаж автомобiлей'
      />

      <section className="section section-info">
        <div className="container">
          <h6 className="title title--mb">
            Інформація про викуп/продаж авто
          </h6>

          <p className="subtitle">
            Вам терміново потрібна готівка, але немає часу продавати машину самостійно? Викупимо Ваше авто! Продай авто рівно за 15 хвилин та отримай до 95% вартості автомобіля.
          </p>
        </div>
      </section>

      <Call/>

      <Contacts />
    </>);
};
export default TradingPage;
