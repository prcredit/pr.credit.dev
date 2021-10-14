import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";

import { AppState } from "../../store";
import { MultiLangContext } from '../../context/MultiLang/MultiLang';
import { IInfo } from "../../interfaces/interfaces";
import { classModifier } from "../../utils";

import './Statistic.scss';


interface IStatisticProps {
  data: IInfo;
}


const Statistic = (props: IStatisticProps) => {
  const {
    data,
  } = props;

  const location = useLocation();
  const {words} = useContext(MultiLangContext);

  const [infoState, setInfoState] = useState({
    blocks: 0,
    price: 0,
    transactions: 0,
    wallets: 0,
  });

  useEffect(() => {
    if (!isNaN(data.price)) {
      setInfoState(prevState => {
        return {
          ...prevState,
          ...data,
        }
      })
    }
  }, [data]);


  return (
    <div id='statistic'
         className={classModifier('statistic',
           [
             (location.pathname === '/')
               ? 'main'
               : 'all'
           ],
         )}>
      <div className="container">
        <div className="statistic__block">
          <div className="statistic__items">
            <div className="statistic-item">
              <div className="statistic-item__circle">
                <img src="/media/images/statistic/blocks.svg" alt=""/>
              </div>

              <div className="statistic-item__info">
                <span className="statistic-item__value">
                  {infoState.blocks}
                </span>

                <h6 className="statistic-item__name">
                  {words.blocks}
                </h6>
              </div>
            </div>

            <div className="statistic-item">
              <div className="statistic-item__circle">
                <img src="/media/images/statistic/trans.svg" alt=""/>
              </div>

              <div className="statistic-item__info">
                <span className="statistic-item__value">
                  {infoState.transactions}
                </span>

                <h6 className="statistic-item__name">
                  {words.transactions}
                </h6>
              </div>
            </div>

            <div className="statistic-item">
              <div className="statistic-item__circle">
                <img src="/media/images/statistic/addresses.svg" alt=""/>
              </div>

              <div className="statistic-item__info">
                <span className="statistic-item__value">
                  {infoState.wallets}
                </span>

                <h6 className="statistic-item__name">
                  {words.addresses}
                </h6>
              </div>
            </div>

            <div className="statistic-item">
              <div className="statistic-item__circle">
                <img src="/media/images/statistic/price.svg" alt=""/>
              </div>

              <div className="statistic-item__info">
                <span className="statistic-item__value">
                  {infoState.price}
                </span>

                <h6 className="statistic-item__name">
                  {words.price}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  data: state.data.list,
});

export default connect(mapStateToProps)(Statistic)