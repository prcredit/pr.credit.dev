import React from "react";

import {CABINET_ROUTES} from "../../config/constants";
import Social from "../../components/Social/Social";
import {Map, Marker} from "pigeon-maps"

import './Contacts.scss';


const Contacts = () => {


  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="title contacts__title">
          Контакти
        </h2>

        <div className="contacts__items">
          <div className="contacts-info">
            <p className="contacts-info__text">
              <span>Назва:</span> Долина Озер
            </p>

            <p className="contacts-info__text">
              <span>Адреса:</span> Київська обл. Макаровський район, село Лишня
            </p>

            <p className="contacts-info__text">
              <span>Координати для GPS: </span> 50.314343, 29.959684
            </p>

            <p className="contacts-info__text">
              <span>Робочі години:</span> 07:00 - 20:00 кожного дня
            </p>

            <p className="contacts-info__text">
              <span>Телефон для довідки та бронювання: </span>

              <a href={CABINET_ROUTES.number}> +380 (50) 053 88 05</a>
            </p>

            <p className="contacts-info__text contacts-info__text--last">
              <span>Соціальні мережі:</span>
            </p>

            <Social/>
          </div>

          <div className="contacts-map">
            <Map defaultCenter={[50.3140768, 29.9590459]} defaultZoom={9.5}>
              <Marker width={50} anchor={[50.3140768, 29.9590459]}/>
            </Map>
          </div>

        </div>
      </div>
    </section>
  )
};

export default Contacts;
