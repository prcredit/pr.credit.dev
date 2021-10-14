import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";

import Moment from 'react-moment';

import API from '../../api/api';
import { MultiLangContext } from "../../context/MultiLang/MultiLang";
import { ROUTES } from "../../config/constants";

import { IMatchParams, ITransaction } from "../../interfaces/interfaces";

import Spinner from '../../components/Spinner';
import AmountFormat from "../../components/AmountFormat/AmountFormat";
import CopyItem from "../../components/CopyItem/CopyItem";
import './TxPage.scss';


const TxPage = () => {
  const history = useHistory();
  const {words, selectedLang} = useContext(MultiLangContext);

  const match = useRouteMatch<IMatchParams>('/tx/:id');
  const [loading, setLoading] = useState(false);

  const [txState, setTxState] = React.useState<ITransaction | any>();

  useEffect(() => {
    setLoading(false);

    API.getTransaction(match?.params.id)
      .then(res => {
        // console.log(res.data)

        setTxState(res.data);
        setLoading(true);
      })
      .catch(err => {
        console.log(err)

        history.push('/not-found')
      });
    // eslint-disable-next-line
  }, [match?.params.id]);


  return (
    <>
      <section className="section details">
        <div className="container">
          {!loading
            ? (
              <Spinner/>
            )
            : (
              <>
                <h2 className="title">{words.txDetails}</h2>

                <div className="details__block">
                  <div className="detail">
                    <h6 className="detail__name">{words.txnHash}:</h6>

                    <div className="copy__block">
                      <span className='text break-all copy__text'>{txState.hash}</span>

                      <CopyItem
                        name={words.hash}
                        value={txState.hash}
                      />
                    </div>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.status}:</h6>

                    <div>
                      <span className={`status status--${txState.status}`}>
                        {(words.statusTx as any)[txState.status]}
                      </span>
                    </div>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.block}:</h6>

                    <NavLink className='link'
                             to={ROUTES.setBlockRoute(txState.block)}>
                      {txState.block}
                    </NavLink>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.timestamp}:</h6>

                    <span className="text">
                      <Moment date={txState.timestamp}
                              utc
                              locale={selectedLang}
                              fromNow
                      />

                      <Moment date={txState.timestamp}
                              utc
                              locale={selectedLang}
                              format=" (MMMM-DD-YYYY HH:mm:ss +UTC)"
                      />
                    </span>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.from}:</h6>

                    <NavLink className='link'
                             to={ROUTES.setAddressRoute(txState.addressFrom)}>
                      {txState.addressFrom}
                    </NavLink>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.to}:</h6>

                    <NavLink className='link'
                             to={ROUTES.setAddressRoute(txState.addressTo)}>
                      {txState.addressTo}
                    </NavLink>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.fee}:</h6>

                    <span className="text">
                      {(txState.fee).toLocaleString('en-EN')} SNT
                    </span>
                  </div>

                  <div className="detail vertical-center">
                    <h6 className="detail__name">{words.value}:</h6>

                    <span className="amount">
                      <AmountFormat
                        type='snt'
                        amount={txState.amountTo}
                      /> SNT

                      <span className='amount--dollar'>
                        <AmountFormat
                          type='usd'
                          amount={txState.amountTo}
                        />
                      </span>
                    </span>
                  </div>
                </div>

                <NavLink className='button button--home'
                         to={ROUTES.main}>
                  <span>{words.backToMain}</span>
                </NavLink>
              </>
            )
          }
        </div>
      </section>
    </>
  );
}

export default TxPage;