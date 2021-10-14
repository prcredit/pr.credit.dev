import React from "react";

import {CABINET_ROUTES} from "../../config/constants";

import './Info.scss';


const Info = () => {
  return (
    <section id='info' className="info">
      <div className="container">
        <h2 className="title info__title">
          Основна інформація
        </h2>

        <div className="info__items">
          <div className="info-item info-item--first">
            <div className="info-item__icon">
              <img src="/media/images/sections/info/fish.svg" alt=""/>
            </div>

            <h6 className="info-item__title">
              Види риби
            </h6>

            <div className="info-item__lists">
              <ul className="info-item__list">
                <li>Щука</li>
                <li>Судак</li>
                <li>Окунь</li>
                <li>Товстолобик</li>
                <li>Короп</li>
              </ul>

              <ul className="info-item__list">
                <li>Лин</li>
                <li>Карась</li>
                <li>Амур білий</li>
                <li>Плітка звичайна</li>
              </ul>
            </div>

            <p className='info-item__text'>Деякі трофейні особини досягають
              <span className="bold"> 17-18 кг</span>.</p>
          </div>

          <div className="info-item info-item--second">
            <div className="info-item__icon">
              <img src="/media/images/sections/info/price.svg" alt=""/>
            </div>

            <h6 className="info-item__title">
              Ціни
            </h6>

            <ul className="info-item__list">
              <p className='info-item__subtitle'>Риболовля (1 людина) 7:00 - 20:00</p>

              <div className="info-item__block info-item__block--dark">
                <li>На мирну рибу — <span className='bold--color'>650 грн</span></li>
                <li>На хижака — <span className='bold--color'>500 грн</span></li>

                <p className='info-item__text'>Норма вилову <span className='bold'>3 кг</span> на один білет. Судак та лин підлягає випуску.</p>
              </div>

              <div className="info-item__block info-item__block--light">
                <li>На карася — <span className='bold--color'>400 грн</span> (дві вудки по одному гачку)</li>

                <p className='info-item__text'>Норма вилову <span className='bold'>2,5 кг</span> на один білет.</p>
              </div>


              <div className="info-item__block info-item__block--dark">
                <p className='info-item__subtitle'>Спортивна риболовля:</p>

                <li>На мирну рибу — <span className='bold--color'>500 грн</span></li>
                <li>На хижака — <span className='bold--color'>350 грн</span></li>
              </div>

              <li>Відпочинок на території комплексу —
                <span className='bold--color'> 150 грн </span>
                 (з 1 людини). Діти віком до 12 років -
                <span className='bold--color'> безкоштовно</span>
              </li>
              <li>Оренда альтанки (до 6 людей) — <span className='bold--color'>600 грн</span></li>
              <li>Мангал — <span className='bold--color'>150 грн</span></li>
              <li>Оренда великої тераси для бенкетів до 25 чоловік
                — <span className='bold--color'>150 грн</span> (з 1 людини). Мінiмальне замовлення від 2,000 грн.
              </li>

            </ul>
          </div>

          <div className="info-item info-item--full">
            <div className="info-item__icon">
              <img src="/media/images/sections/info/rules.svg" alt=""/>
            </div>

            <h6 className="info-item__title">
              ПРАВИЛА ВІДПОЧИНКУ ТА РИБОЛОВЛІ НА ТЕРИТОРІЇ КОМПЛЕКСУ «ДОЛИНА ОЗЕР»
            </h6>

            <ul className="info-item__roster">
              <li>
                <span className="bold">1. </span>
                Час риболовлі <span className='bold'>з 7:00 до 20:00</span>.
              </li>

              <li>
                <span className="bold">2. </span>
                На один риболовний квиток (одну людину) дозволено використовувати не більше 2-х поплавкових вудок або вудок далекого закиду або спінінгів з кормушками.
              </li>

              <li>
                <span className="bold">3. </span>
                Є можливість бронювання вимосток або секторів на день риболовлі відповідно зі встановленими розцінками за контактними телефонами. Ціна бронювання <span className='bold'>50 грн</span>.
              </li>

              <li>
                <span className="bold">4. </span>
                Оплата квитка для ловлі риби проводиться до початку риболовлі. Розрахунок може бути як в готівковій так і заздалегідь безготівковій формі оплати. Є можливість прокату рибальського спорядження за додаткову плату при внесенні застави.
              </li>

              <li>
                <span className="bold">5. </span>
                Обмеження по вилову риби на один квиток — <span className="bold">3 кг</span>. Вилов риби понад норми оплачується додатково згідно з існуючими розцінками. При вилові трофейних особин понад <span className="bold">3 кг</span> — рибалка зобов’язаний випустити їх назад у водойму.                                                                                          Також відпускається весь зловлений судак та лин, незалежно від ваги особин. У садку рибалки може знаходитися лише та риба,  яку він планує забрати з собою.
              </li>

              <li>
                <span className="bold">6. </span>
                Відвідувачі мають можливість за додаткову плату взяти в прокат різне спорядження для риболовлі та відпочинку.
              </li>

              <li>
                <span className="bold">7. </span>
                З метою виконання даних правил і умов по закінченню риболовлі необхідно запросити представника адміністрації для зважування і обліку виловленої риби, а також здати свій сектор та взяте в прокат спорядження. При цьому, до моменту контролю зважування, садок з рибою повинен бути у воді.
              </li>

              <li>
                <span className="bold">8. </span>
                У випадку втрати або пошкодження майна господарства, рибалки зобов’язані відшкодувати вартість нанесеного збитку чи вартість ремонту пошкодженого майна.
              </li>

              <li>
                <span className="bold">9. </span>
                Адміністрація не несе відповідальності за збереження особистих речей рибалок та відвідувачів комплексу у випадку, якщо вони не були здані адміністрації на зберігання.
              </li>

              <li>
                <span className="bold">10. </span>
                Під час перебування на водоймах Долини Озер <span className="bold">забороняється</span>:

                <ul className='info-item__list'>
                  <li>вилов риби за допомогою сітки, “макушатників”, вибухових, хімічних, електричних і колючих знарядь лову</li>
                  <li>розведення багать у невстановлених місцях (виключення — в мангалах та спеціально відведених для цього місцях)</li>
                  <li>надмірне вживання спиртних напоїв</li>
                  <li>купання людей (тільки у відведених для купання місцях) і тварин. Домашні тварини, привезені з собою на територію комплексу, не повинні залишатися без нагляду та становити загрозу або дискомфорт оточуючим. Наявність на собаках намордника, ошийника та повідця обов’язкова</li>
                  <li>миття посуду у водоймах</li>
                  <li>миття автотранспортних засобів</li>
                  <li>засмічення недопалками від сигарет і будь-яким іншим сміттям водоймищ і території комплексу  </li>
                  <li>чищення риби в місцях відпочинку</li>
                  <li>стоянка автомобілів в прибережній зоні водойми.</li>
                </ul>

              </li>

            </ul>
          </div>
        </div>

        <a
          href={CABINET_ROUTES.number}
          className="link-btn link-btn--light info__link-btn"
          rel="noopener noreferrer"
        >
           <span>
              Зателефонувати
            </span>

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path
                d="M15.5646 11.7424L13.3317 9.50954C12.5343 8.71209 11.1786 9.0311 10.8596 10.0678C10.6204 10.7855 9.82296 11.1842 9.10526 11.0247C7.51037 10.626 5.35726 8.5526 4.95854 6.87797C4.71931 6.16024 5.19778 5.36279 5.91548 5.12359C6.95216 4.80461 7.27113 3.44895 6.47369 2.65151L4.24084 0.418659C3.60288 -0.139553 2.64595 -0.139553 2.08774 0.418659L0.572591 1.93381C-0.942555 3.5287 0.73208 7.75516 4.48007 11.5032C8.22807 15.2511 12.4545 17.0056 14.0494 15.4106L15.5646 13.8955C16.1228 13.2575 16.1228 12.3006 15.5646 11.7424Z"
                fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </section>
  )
};

export default Info;
