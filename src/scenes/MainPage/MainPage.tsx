import React from 'react';
import './MainPage.scss';


const MainPage = () => {

  return (
    <>
      <section className="section-main">

        <div className="container">










          <div className="top_block w100">
            <div className="id" id="calculator"></div>
            <div className="wrapper fx w">
              <div className="cont">
                <h1 className="title2">Автоломбард MegaCredit у Києві</h1>
                <h2 className="title1">1% ставка<br/> за перший місяць</h2>
                <ul>
                  <li>Отримайте гроші протягом 60 хвилин</li>
                  <li>Продовжуйте користуватися вашим автомобілем</li>
                  <li>Кредит без підтвердження доходів</li>
                  <li>Без витрат на КАСКО</li>
                </ul>
              </div>


              <div className="calculator_block">
                <div className="id" id="calculator_bx"></div>
                <div className="calculator form_block">

                  <form className="calculator_form ajax_form" method="post">

                    <input type="hidden" name="lang" value="ua"/>

                    <input type="hidden" name="name[0]" value=""/>
                    <input type="hidden" name="value[0]" value="Credit calculator"/>

                    <div className="range_block sum_block bx">
                      <div className="inp_bx fx w">
                        <div className="lbl_block fx v c">
                          <label htmlFor="price">Необхідна сума</label>
                        </div>

                        <div className="inp_block">
                          <input type="hidden" name="name[10]" value="Необхідна сума"/>
                          <input id="price" type="number" step="100" name="value[10]"  min="500"
                                 max="50000" />
                          <div className="unit">$</div>
                        </div>

                      </div>
                      <div className="inp_range_block">
                        <input name="price_range" type="range"  min="500" max="50000" step="100"/>
                        <div className="from_to">
                          <div className="from">від $500</div>
                          <div className="to">до $50000</div>
                        </div>
                      </div>

                    </div>


                    <div className="range_block term_block bx">
                      <div className="inp_bx fx w">
                        <div className="lbl_block fx v c">
                          <label htmlFor="month">Термін кредитування</label>
                        </div>

                        <div className="inp_block">
                          <input type="hidden" name="name[11]" value="Термін кредитування"/>
                          <input id="month" type="number" step="1" name="value[11]"  min="2" max="24"/>
                          <div className="unit">міс</div>
                        </div>

                      </div>
                      <div className="inp_range_block">
                        <input name="month_range" type="range"  min="2" max="24" step="1"/>
                        <div className="from_to">
                          <div className="from">від 2 міс (від 61 дня)</div>
                          <div className="to">до 24 міс</div>
                        </div>
                      </div>

                    </div>


                    <div className="rb_block payment_type_block bx fx sb">
                      <div className="title_block fx v c">
                        <p>Погашення кредиту</p>
                      </div>
                      <div className="radio_block fx">
                        <input type="hidden" name="name[12]" value="Погашення кредиту" />
                        <input className="payment_type" id="payment_type_1" type="radio" name="value[12]"
                                data-val="1" checked/>
                        <label htmlFor="payment_type_1">Тільки відсоток</label>
                        <input className="payment_type" id="payment_type_2" type="radio" name="value[12]"
                               value="Рівномірними частинами" data-val="2"/>
                        <label htmlFor="payment_type_2">Рівномірними частинами</label>
                      </div>

                    </div>


                    <div className="rb_block car_block bx fx sb">
                      <div className="title_block fx v c">
                        <p>Автомобіль</p>
                      </div>
                      <div className="radio_block fx">
                        <input type="hidden" name="name[13]" value="Автомобіль"/>
                        <input className="car" id="car_1" type="radio" name="value[13]" value="На стоянці"
                               data-val="1" checked/>
                        <label htmlFor="car_1">На стоянці</label>
                        <input className="car" id="car_2" type="radio" name="value[13]"
                               value="У користуванні Клієнта" data-val="2"/>
                        <label htmlFor="car_2">У користуванні Клієнта</label>
                      </div>

                    </div>


                    <div className="result_block fx sb">
                      <p className="title">Щомісячний платіж</p>
                      <input type="hidden" name="name[14]" value="Щомісячний платіж, $"/>
                      <input className="res_usd" type="hidden" name="value[14]" />

                      <input type="hidden" name="name[15]" value="Щомісячний платіж, грн"/>
                      <input className="res_uah" type="hidden" name="value[15]" />
                      <div className="result">
                        <p className="main_result">
                          <span className="from">від</span>
                          <span className="val">150</span><span className="currency">$</span>
                        </p>
                        <p className="result_uah"><span className="val">4250</span><span
                          className="currency">грн</span></p>
                      </div>
                    </div>


                    <div className="user_info bx">
                      <div className="inp">
                        <input type="hidden" name="name[1]" value="І'мя"/>
                        <input type="text" name="value[1]" placeholder="І'мя" required/>
                      </div>
                      <div className="inp b">
                        <input type="hidden" name="name[3]" value="Телефон"/>
                        <input type="tel" className="inp_phone" name="value[3]" placeholder="Телефон" required/>
                      </div>
                    </div>


                    <input type="hidden" name="name[110]" value="Region"/>
                    <input type="hidden" name="value[110]" value="Kiev"/>

                    <div className="button_block bx">
                      <button className="button" type="submit">Дізнатися рішення</button>
                    </div>


                    <div className="privacy_block bx fx">
                      <label className="checkbox_block">
                <span className="checkbox">
                    <input id="privacy" type="checkbox" name="privacy" value="1" checked required/>
                    <i></i><i></i><i></i>
                </span>
                      </label>
                      <label htmlFor="privacy" className="cont">Відправляючи заявку, я даю згоду на обробку
                        персональних даних</label>
                    </div>

                  </form>

                  <div className="info hide"><span></span></div>

                </div>

                <div className="note">
                  <p>* Відсоткова ставка використовувана в розрахунку <span className="pr_val">1.9</span>% в місяць</p>
                  <p>** Сума позики до 80% ринкової вартості заставного автомобіля</p>
                </div>


              </div>


            </div>
          </div>

















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

        </div>
      </section>
    </>
  )
}

export default MainPage;