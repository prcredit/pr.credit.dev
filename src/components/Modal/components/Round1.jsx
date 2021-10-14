import React from 'react';

import './Round.scss';

const Round1 = (props) => {
  const { closeModal } = props;

  return (
    <div className='modal__overlay'>
      <div className="modal__body">
        <div className="modal__header">
          <h3 className='modal__title'>
            Раунд 1. Задачи
          </h3>

          <span className='modal__cross' onClick={closeModal}>
            <img src="/media/images/global/cross-icon-md.svg" alt="Dolyna Ozer Image" />
          </span>
        </div>

        <div className="modal__top">
          <div className="modal__column modal__column--left">
            <div className="modal__column-name">
              <img src="/media/images/modal/suite.svg" alt="Dolyna Ozer Image" />&nbsp;<span>
                Цель
              </span>
            </div>

            <div className="modal__num">
              $4,000,000
            </div>
          </div>

          <div className="modal__column modal__column--right">
            <div className="modal__column-name">
              <img src="/media/images/modal/calendar.svg" alt="Dolyna Ozer Image" />&nbsp;<span>
                Срок
              </span>
            </div>

            <div className="modal__num">
              ≈ 4 месяца
            </div>
          </div>
        </div>

        <div className="modal__goals-box">
          <div className="modal__goal-item-wrap">
            <div className="modal__goal-label">
              Создание Публичного Акционерного Общества
            </div>

            <ul className="modal__goal-list">
              <li className="modal__goal-list-item">
                Подготовка документации
              </li>

              <li className="modal__goal-list-item">
                Сбор данных и внесение акционеров
              </li>

              <li className="modal__goal-list-item">
                Прохождение комплаенса
              </li>

              <li className="modal__goal-list-item">
                Открытие банковского счета
              </li>

              <li className="modal__goal-list-item">
                Прохождение комиссии по ценным бумагам
              </li>
            </ul>
          </div>

          <div className="modal__goal-item-wrap">
            <div className="modal__goal-label">
              Создание Компании
              Специального назначения
            </div>

            <ul className="modal__goal-list">
              <li className="modal__goal-list-item">
                Подготовка документации
              </li>

              <li className="modal__goal-list-item">
                Внесение акционеров
              </li>

              <li className="modal__goal-list-item">
                Открытие банковского счета
              </li>

              <li className="modal__goal-list-item">
                Залоговый депозит
              </li>

              <li className="modal__goal-list-item">
                Формирование штата (25 сотрудников)
              </li>

              <li className="modal__goal-list-item">
                Подготовка проектной документации
              </li>

              <li className="modal__goal-list-item">
                Рабочий проект
              </li>

              <li className="modal__goal-list-item">
                Заключение договора на аренду земли
              </li>

              <li className="modal__goal-list-item">
                Заключение договора на охранные услуги + оборудование
              </li>

              <li className="modal__goal-list-item">
                Заключение договора на пожарные услуги + оборудование
              </li>

              <li className="modal__goal-list-item">
                Обустраивание территории: водоснабжение, электричество, утилизация
              </li>

              <li className="modal__goal-list-item">
                Закупка материалов, постройка оранжерии, склада, рабочего офиса
              </li>

              <li className="modal__goal-list-item">
                Подача заявки на Provisional лицензию
              </li>
            </ul>
          </div>

          <div className="modal__goal-item-wrap">
            <div className="modal__goal-label">
              Дополнительно
            </div>

            <ul className="modal__goal-list">
              <li className="modal__goal-list-item">
                Операционные расходы
              </li>

              <li className="modal__goal-list-item">
                Административные расходы
              </li>

              <li className="modal__goal-list-item">
                Аренда
              </li>

              <li className="modal__goal-list-item">
                Зарплаты
              </li>

              <li className="modal__goal-list-item">
                Уборка, утилизация отходов
              </li>
            </ul>
          </div>
        </div>

        <a
          href="https://backoffice.sincere.systems/personal-office/investments/cannabis/round-one"
          target='_blank'
          rel="noopener noreferrer"
          className='modal__btn'
        >
          <span>
            Стать акционером
          </span>
        </a>
      </div>
    </div>
  )
}

export default Round1;