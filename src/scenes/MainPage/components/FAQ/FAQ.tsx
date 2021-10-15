import React, {useContext, useState} from 'react';
import {Reveal} from "react-awesome-reveal";

import {IFAQProps} from "./FAQ.types";

import './FAQ.scss';
import FAQItem from "./components/FAQItem";
import {customAnimation} from "../../../../config/constants";


const FAQ = () => {


  const dataFAQ: IFAQProps[] = [
    {
      ask: '111111111',
      answers: [
        '1111111',
      ]
    },
    {
      ask: '222222222222',
      answers: [
       '222222',
      ]
    },
    {
      ask: '33333333333',
      answers: [
        '3333333333',
      ]
    },
    {
      ask: '444444444444444',
      answers: [
        '444444444444',
      ]
    },
  ]

  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="FAQ anchor" id="FAQ">
      <div className="container">

          <div className="FAQ__wrapper">
            <div className="FAQ__title-block">
              <h2 className="FAQ__title title">
                <span>qqqqqqqq</span> wwwwwwwwwwww
              </h2>

              <div className="FAQ__email-block hidden">
                <div className="FAQ__email-icon">
                  <img src="/media/images/general/email.svg" alt=""/>
                </div>

                <div className="FAQ__email-text">
                  <h5>
                    eeeeeeeeee e-mail
                  </h5>

                  <a href="mailto:support@sincere.systems">
                    support@sincere.systems
                  </a>
                </div>
              </div>
            </div>

            <ul className="FAQ__table">
              {
                dataFAQ.map(item => (
                  <FAQItem
                    ask={item.ask}
                    setActiveItem={setActiveItem}
                    activeItem={activeItem === item.ask}
                    key={item.ask}
                  >
                    <div className="FAQ__text">
                      {
                        item.answers.map(text => {
                          return (
                            <p key={text} dangerouslySetInnerHTML={{__html: text}}/>
                          )
                        })
                      }
                    </div>
                  </FAQItem>
                ))
              }
            </ul>
          </div>

      </div>
    </section>
  )
};

export default FAQ;