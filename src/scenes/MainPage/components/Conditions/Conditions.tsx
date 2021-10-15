import React from "react";


const Conditions = () => {

  return (
    <>
      <div className="inform_block w100">
        <div className="id" id="conditions"></div>
        <div className="inform_blocks fx w">

          <div className="item">
            <i className="i-team"></i>
            <p className="title"><span>Хто може подати заявку?</span></p>
            <ul>
              <li>Фізічна особа, яка досягла 21 року</li>
              <li>Юридична особа</li>
            </ul>
          </div>

          <div className="item">
            <i className="i-car"></i>
            <p className="title"><span>Вимоги до авто</span></p>
            <ul>
              <li>Ваше авто не старше 2005 року</li>
              <li>Ви є власником авто за тех паспортом</li>
              <li>Авто на українській реєстрації</li>
            </ul>
          </div>

          <div className="item">
            <i className="i-contract"></i>
            <p className="title"><span>Умови договору</span></p>
            <ul>
              <li>Кредит терміном від 1 місяця до 2 років</li>
              <li>Ставка від 1% за програмою «на стоянку» і «в ходу»</li>
              <li>Видаємо до 80% від вартості авто</li>
              <li>Допустиме прострочення платежу - до 5 календарних днів без штрафних санкцій</li>
            </ul>
          </div>

          <div className="item">
            <i className="i-document"></i>
            <p className="title"><span>Необхідні документи</span></p>
            <ul>
              <li>Паспорт громадянина України</li>
              <li>Свідоцтво про реєстрацію транспортного засобу</li>
              <li>Довіреність на право розпорядження авто</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Conditions;
