import React from 'react';

import Calculator from "./components/Calculator/Calculator";
import Conditions from "../../components/Conditions/Conditions";
import FAQ from "./components/FAQ/FAQ";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Contacts from "../../components/Contacts/Contacts";

import './PawnshopPage.scss';

const PawnshopPage = () => {
  return (
    <>
      <SectionTitle
        title='Автоломбард'
        // desc='Почти как в банке, только сразу!'
      />

      <section className="section section-info">
        <div className="container">
          <h6 className="title title--mb">
            Інформація про автоломбард
          </h6>

          <p className="subtitle">
            Короткий термін видачі коштів. Ми готові видати позику у день звернення, вся процедура від заявки до
            підписання
            договору триває близько години.
            Гнучкі умови співробітництва. Ми завжди готові піти назустріч: при необхідності ми продовжимо термін
            кредитування або дозволимо закрити його раніше за початкову дату.
            Жодних прихованих умов та санкцій, у нас – прозорі умови позик.
          </p>
        </div>
      </section>

      <Conditions/>

      <Calculator/>

      <FAQ/>

      <Contacts/>

      {/*<script src="scripts/1-before.js"></script>*/}
      {/*<script src="scripts/2.js"></script>*/}
      {/*<script>eval(mod_pagespeed_HQVyrusla3);</script>*/}
      {/*<script>eval(mod_pagespeed_v_7RUvBRCq);</script>*/}
      {/*<script src="scripts/3.js"></script>*/}
      {/*<script>eval(mod_pagespeed_SYxdpgX4Wv);</script>*/}
      {/*<script>eval(mod_pagespeed_9$XfdS_SuS);</script>*/}
      {/*<script>eval(mod_pagespeed_728g0iSD5B);</script>*/}
      {/*<script>eval(mod_pagespeed_cnoU_iN5iL);</script>*/}

    </>
  );
};
export default PawnshopPage;
