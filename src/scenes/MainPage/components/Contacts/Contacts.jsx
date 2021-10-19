import React from "react";
import { LINK_ROUTES } from "../../../../config/constants";
import Social from "../../../../components/Social/Social";
import { Map, Marker } from "pigeon-maps";
import './Contacts.scss';
const Contacts = () => {
    return (<section id="contacts" className="section contacts">
      <div className="container">
        <h2 className="title contacts__title">
          Контакти
        </h2>

        <div className="contacts__items">
          <div className="contacts-map">
            <Map defaultCenter={[50.3140768, 29.9590459]} defaultZoom={9.5}>
              <Marker width={50} anchor={[50.3140768, 29.9590459]}/>
            </Map>
          </div>

          <div className="contacts-info">
            <p className="contacts-info__text">
              <span>Назва:</span> PR CREDIT
            </p>

            <p className="contacts-info__text">
              <span>Адреса:</span> м. Київ, вул. Туполєва, 1Б
            </p>

            <p className="contacts-info__text">
              <span>Посилання на Google Maps: </span>
              <a href='https://goo.gl/maps/rf2SE1ggbB5Ec4fv8' target='_blank' rel="noopener noreferrer"> https://goo.gl/maps/rf2SE1ggbB5Ec4fv8</a>

            </p>

            <p className="contacts-info__text">
              <span>Робочі години:</span> 07:00 - 20:00 кожного дня
            </p>

            <p className="contacts-info__text">
              <span>Телефон для довідки та бронювання: </span>

              <a href={`tel:${LINK_ROUTES.contacts.number}`}> +380 (50) 050 50 50</a>
            </p>

            <p className="contacts-info__text">
              <span>Соціальні мережі:</span>
            </p>

            <Social />
          </div>
        </div>
      </div>
    </section>);
};
export default Contacts;
