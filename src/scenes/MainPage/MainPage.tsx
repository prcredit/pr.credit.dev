import React, { useContext, useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import Moment from 'react-moment';

import API from '../../api/api';
import { MEDIA_SIZES, ROUTES } from '../../config/constants';
import { MultiLangContext } from '../../context/MultiLang/MultiLang';
import { classModifier } from "../../utils";
import { useCheckWindowSize } from "../../hooks";
import { ITransaction } from "../../interfaces/interfaces";

import AmountFormat from '../../components/AmountFormat/AmountFormat';
import Spinner from '../../components/Spinner';
import Pagination from "../../components/Pagination/Pagination";
import './MainPage.scss';


const MainPage = () => {
  const {selectedLang} = useContext(MultiLangContext);
  const {words} = useContext(MultiLangContext);
  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.tablet);

  const [loading, setLoading] = useState(false);
  const [transactionsState, setTransactionsState] = useState<{
    data: ITransaction[];
    currentPage: number;
    last_page: number;
    total_items: number;
    limit: number;
  }>({
    data: [],
    currentPage: 1,
    last_page: 1,
    total_items: 50,
    limit: 50,
  });

  const [openedTrans, setOpenedTrans] = useState();

  const onChangePage = useCallback((page) => {
    setTransactionsState(prevState => ({
      ...prevState,
      currentPage: page,
    }));
  }, []);

  useEffect(() => {
    setLoading(false);

    API.getTransactions(transactionsState.currentPage)
      .then(res => {
        // console.log(res.data)

        setTransactionsState(prevState => {
          return {
            ...prevState,
            ...res.data,
          }
        })
        setLoading(true);
      })
      .catch(err => {
        console.log(err)
      });
  }, [transactionsState.currentPage]);


  return (
    <>
      <section className="section-main">
        <div className="container">
          {!loading
            ? (
              <Spinner/>
            )
            : (
              <>
                <h2 className="title">{words.lastTransactions}</h2>

                <div className="transactions__block">
                  <div className="transactions-header">
                    <h6>{words.block}</h6>

                    <h6>{words.hash}</h6>

                    <h6>{words.date}</h6>

                    <h6>{words.time} (UTC+0)</h6>

                    <h6>{words.amount} (SNT)</h6>
                  </div>

                  {
                    transactionsState.data.map((trans: any, index: number) => {
                      return (
                        <div
                          className={classModifier('transaction', [
                            openedTrans === trans.hash && 'active'
                          ])}
                          key={index}>

                          <div className="transaction-cell transaction-cell--sm">
                            <h6 className="transaction-cell__name">{words.block}:</h6>

                            <NavLink className='link'
                                     to={ROUTES.setBlockRoute(trans.block)}>
                              {trans.block}
                            </NavLink>
                          </div>

                          <div className="transaction-cell transaction-cell--main">
                            <h6 className="transaction-cell__name">{words.hash}:</h6>

                            <NavLink className='link link--ellipsis main--link'
                                     to={ROUTES.setTxRoute(trans.hash)}>
                              {trans.hash}
                            </NavLink>

                            <button
                              className='show-more'
                              onClick={() => setOpenedTrans(openedTrans === trans.hash
                                ? null
                                : trans.hash
                              )}
                            />
                          </div>

                          {isDesktop
                            ? <>
                              <div className="transaction-cell transaction-cell--sm">
                                <h6 className="transaction-cell__name">{words.date}:</h6>

                                <p className='text'>
                                  <Moment date={trans.timestamp}
                                          utc
                                          locale={selectedLang}
                                          format="DD.MM.YYYY"
                                  />
                                </p>
                              </div>

                              <div className="transaction-cell transaction-cell--sm">
                                <h6 className="transaction-cell__name">{words.time} (UTC+0):</h6>

                                <p className='text'>
                                  <Moment date={trans.timestamp}
                                          utc
                                          locale='ru'
                                          format='HH:mm:ss'
                                  />
                                </p>
                              </div>
                            </>

                            : <>
                              <div className="transaction-cell transaction-cell--sm">
                                <h6 className="transaction-cell__name">{words.timestamp}:</h6>

                                <p className='text'>
                                  <Moment date={trans.timestamp}
                                          utc
                                          locale={selectedLang}
                                          fromNow
                                  />

                                  <Moment date={trans.timestamp}
                                          utc
                                          locale={selectedLang}
                                          format=" (MMMM-DD-YYYY HH:mm:ss +UTC)"
                                  />
                                </p>
                              </div>
                            </>
                          }

                          <div className="transaction-cell transaction-cell--sm">
                            <h6 className="transaction-cell__name">{words.value}:</h6>

                            <p className='amount'>
                              <AmountFormat
                                type='snt'
                                amount={trans.amountTo}
                              />

                              <span className='amount--sm'> SNT</span>

                              <span className='amount--sm amount--dollar'>
                                <AmountFormat
                                  type='usd'
                                  amount={trans.amountTo}
                                />
                              </span>
                            </p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>


                {transactionsState.last_page !== 1 &&
                <Pagination
                  pageCount={transactionsState.last_page}
                  onChange={onChangePage}
                  forcePage={transactionsState.currentPage - 1}
                />
                }
              </>
            )
          }
        </div>
      </section>
    </>
  );
}

export default MainPage;