import React, { useState } from 'react';
import './FAQ.scss';
import FAQItem from "./components/FAQItem";
const FAQ = () => {
    const dataFAQ = [
        {
            ask: 'Чи можливе дострокове погашення позики?',
            answers: [
                'Так, таке погашення можливо. В нашій компанії дострокове погашення відбувається без будь-яких штрафних санкцій.',
            ]
        },
        {
            ask: 'Від чого залежать умови позики (відсоткова ставка і сума видачі)?',
            answers: [
                'Максимальна сума, на яку може розраховувати наш клієнт, залежить від: вартості автомобіля, кредитної історії клієнта, а також, правової форми оформлення позики (чи буде це кредит або лізинг, автомобіль буде залишатися у нас на стоянці або в користуванні у клієнта).\n' +
                    '\n' +
                    'Відсоткова ставка визначається так само індивідуально і залежить від терміну позики, суми і правової форми оформлення такої позики.',
            ]
        },
        {
            ask: 'На який термін видається кредит під заставу автомобіля?',
            answers: [
                'Мінімальний термін кредитування який передбачений законодавством - 2 місяці, максимальний - 12 місяців, з правом пролонгації договору на такий же термін.\n' +
                    '\n' +
                    'Мінімальний термін (2 місяці), жодним чином не обмежує право клієнта погасити позику достроково і без штрафних санкцій.',
            ]
        },
        {
            ask: 'Чи можливий кредит під заставу авто, якщо в минулому були проблеми з кредитною історією?',
            answers: [
                'Можливий, але ми змушені врахувати цей ризик і видати трохи меншу суму або запропонувати максимальну суму, але з безпечної правовою формою оформлення позики.',
            ]
        },
    ];
    const [activeItem, setActiveItem] = useState(null);
    return (<section className="section FAQ" id="FAQ">
      <div className="container">
        <div className="FAQ__wrapper">
          <div className="FAQ__title-block">
            <h2 className="FAQ__title title title--light">
              <span>FAQ</span> <br /> Відповіді на часто задавані питання
            </h2>
          </div>

          <ul className="FAQ__table">
            {dataFAQ.map(item => (<FAQItem ask={item.ask} setActiveItem={setActiveItem} activeItem={activeItem === item.ask} key={item.ask}>
                  <div className="FAQ__text">
                    {item.answers.map(text => {
                return (<p key={text} dangerouslySetInnerHTML={{ __html: text }}/>);
            })}
                  </div>
                </FAQItem>))}
          </ul>
        </div>
      </div>
    </section>);
};
export default FAQ;
