import React from "react";

import './Calculator.scss';

const Content = () => {

  return (
    <>
      <section id="calculator" className="section section-calc">
        <div className="container">
            <div className="content">
              <div className="calculator_block">
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
                  </form>
                </div>

                <div className="note">
                  <p>* Відсоткова ставка використовувана в розрахунку <span className="pr_val">1.9</span>% в місяць</p>
                  <p>** Сума позики до 80% ринкової вартості заставного автомобіля</p>
                </div>


              </div>

              <div className="info">
                <h2 className="calc__title">1% ставка<br/> за перший місяць</h2>
                <ul className='calc__list'>
                  <li>Отримайте гроші протягом 60 хвилин</li>
                  <li>Продовжуйте користуватися вашим автомобілем</li>
                  <li>Кредит без підтвердження доходів</li>
                  <li>Без витрат на КАСКО</li>
                </ul>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Content;
