import React from "react";

import './Conditions.scss';

const Conditions = () => {

  return (
    <>
      <section id="conditions" className="section section-conditions">
        <div className="container">
          <div className="conditions__items">
            <div className="conditions__item">
              <img className='conditions__image' src="" alt=""/>
              <h6 className="conditions__title">
                Хто може подати заявку?
              </h6>
              <ul className="conditions__list">
                <li>Фізічна особа, яка досягла 21 року</li>
                <li>Юридична особа</li>
              </ul>
            </div>

            <div className="conditions__item">
              <img className='conditions__image' src="" alt=""/>
              <h6 className="conditions__title">
                Вимоги до авто
              </h6>
              <ul className="conditions__list">
                <li>Ваше авто не старше 2005 року</li>
                <li>Ви є власником авто за тех паспортом</li>
                <li>Авто на українській реєстрації</li>
              </ul>
            </div>

            <div className="conditions__item">
              <img className='conditions__image' src="" alt=""/>
              <h6 className="conditions__title">
                Умови договору
              </h6>
              <ul className="conditions__list">
                <li>Кредит терміном від 1 місяця до 2 років</li>
                <li>Ставка від 1% за програмою «на стоянку» і «в ходу»</li>
                <li>Видаємо до 80% від вартості авто</li>
                <li>Допустиме прострочення платежу - до 5 календарних днів без штрафних санкцій</li>
              </ul>
            </div>

            <div className="conditions__item">
              <img className='conditions__image' src="" alt=""/>
              <h6 className="conditions__title">
                Необхідні документи
              </h6>
              <ul className="conditions__list">
                <li>Паспорт громадянина України</li>
                <li>Свідоцтво про реєстрацію транспортного засобу</li>
                <li>Довіреність на право розпорядження авто</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conditions;
