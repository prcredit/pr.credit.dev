import React from 'react';
import './UsaPage.scss';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Contacts from "../../components/Contacts/Contacts";
import Call from "../../components/Call/Call";

const UsaPage = () => {
  return (<>
    <SectionTitle
      title='Пригон авто iз США'
      // desc='Пригон автомобiлей iз США'
    />

    <section className="section section-info">
      <div className="container">
        <h6 className="title title--mb">
          Автомобіль вашої мрії з США під ключ.
        </h6>

        <p className="subtitle">
          Хочеш ганяти на крутому автомобілі, але не вистачає коштів? Ми знаємо вихід – замов авто із США разом с «PR
          Credit».
        </p>
      </div>
    </section>

    <Call/>

    <Contacts/>
  </>);
};
export default UsaPage;
