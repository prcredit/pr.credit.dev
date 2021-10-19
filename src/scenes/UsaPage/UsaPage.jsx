import React from 'react';
import './UsaPage.scss';
import SectionTitle from "../MainPage/components/SectionTitle/SectionTitle";
import Conditions from "../MainPage/components/Conditions/Conditions";
import FAQ from "../MainPage/components/FAQ/FAQ";
const UsaPage = () => {
    return (<>
      <SectionTitle title='Пригон авто iз США' desc='Пригон автомобiлей iз США'/>

      <section className="section section-info">
        <div className="container">
          <p className="title">
            Информация про Пригон авто iз США...
          </p>
        </div>
      </section>

      <Conditions />

      <FAQ />
    </>);
};
export default UsaPage;
