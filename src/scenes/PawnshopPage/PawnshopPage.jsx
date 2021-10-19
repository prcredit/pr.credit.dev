import React from 'react';
import Calculator from "../MainPage/components/Calculator/Calculator";
import Conditions from "../MainPage/components/Conditions/Conditions";
import FAQ from "../MainPage/components/FAQ/FAQ";
import SectionTitle from "../MainPage/components/SectionTitle/SectionTitle";
import './PawnshopPage.scss';

const PawnshopPage = () => {
  return (
    <>
    <SectionTitle title='Автоломбард' desc='Автоломбард PR CREDIT у Києві'/>

    <section className="section section-info">
      <div className="container">
        <p className="title">
          Информация про Автоломбард...
        </p>
      </div>
    </section>

    <Calculator/>

    <Conditions/>

    <FAQ/>
  </>
  );
};
export default PawnshopPage;
