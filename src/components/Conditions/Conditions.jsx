import React from "react";
import { IoDocumentOutline, IoDocumentsOutline, IoCarSportOutline, IoPeopleOutline } from "react-icons/io5";
import './Conditions.scss';
const Conditions = () => {
    return (<>
      <section id="conditions" className="section section-conditions">
        <div className="container">
          <h3 className="title title--light conditions__title">
            Умови подання заявки
          </h3>

          <div className="conditions__items">
            <div className="conditions__item">
              <div className="conditions__icon">
                <IoPeopleOutline size={50} color={'4e70ab'}/>
              </div>
              <h6 className="conditions__subtitle">
                Хто може подати заявку?
              </h6>
              <ul className="conditions__list">
                <li>Фізічна особа, яка досягла 21 року</li>
                <li>Юридична особа</li>
              </ul>
            </div>

            <div className="conditions__item">
              <div className="conditions__icon">
                <IoCarSportOutline size={50} color={'4e70ab'}/>
              </div>
              <h6 className="conditions__subtitle">
                Вимоги до авто
              </h6>
              <ul className="conditions__list">
                <li>Ви є власником авто за тех. паспортом</li>
                <li>Авто на українській реєстрації</li>
              </ul>
            </div>

            <div className="conditions__item">
              <div className="conditions__icon">
                <IoDocumentOutline size={50} color={'4e70ab'}/>
              </div>
              <h6 className="conditions__subtitle">
                Умови договору
              </h6>
              <ul className="conditions__list">
                <li>Кредит терміном від 2 місяців до 1 року</li>
                <li>Видаємо до 80% від вартості авто</li>
                <li>Ставка від 1% за програмою «на стоянку» і «в ходу»</li>
                <li>Допустиме прострочення платежу - до 5 календарних днів без штрафних санкцій</li>
              </ul>
            </div>

            <div className="conditions__item">
              <div className="conditions__icon">
                <IoDocumentsOutline size={50} color={'4e70ab'}/>
              </div>
              <h6 className="conditions__subtitle">
                Необхідні документи
              </h6>
              <ul className="conditions__list">
                <li>Паспорт громадянина України</li>
                <li>Довіреність на право розпорядження авто</li>
                <li>Свідоцтво про реєстрацію транспортного засобу</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>);
};
export default Conditions;
