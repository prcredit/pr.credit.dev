import React, { useContext, useEffect, useState, useCallback } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';

import Moment from 'react-moment';

import API from '../../api/api';
import { MultiLangContext } from "../../context/MultiLang/MultiLang";
import { ROUTES } from "../../config/constants";
import { classModifier } from "../../utils";

import { IMatchParams, ITransaction } from "../../interfaces/interfaces";

import Spinner from '../../components/Spinner';
import AmountFormat from "../../components/AmountFormat/AmountFormat";
import CopyItem from '../../components/CopyItem/CopyItem';
import Tooltip from "../../components/Tooltip/Tooltip";
import Pagination from "../../components/Pagination/Pagination";
import './AddressPage.scss';


const AddressPage = () => {
  const history = useHistory();
  const {selectedLang, words} = useContext(MultiLangContext);

  const match = useRouteMatch<IMatchParams>('/address/:id');
  const [loading, setLoading] = useState(false);
  const [openedTrans, setOpenedTrans] = useState();
  const [addressState, setAddressState] = useState<{
    dataList: ITransaction[];
    address: string,
    balance: number,
    currentPage: number;
    last_page: number;
    total_items: number;
    limit: number;
  }>({
    dataList: [],
    address: "",
    balance: 0,
    currentPage: 1,
    last_page: 1,
    total_items: 50,
    limit: 50,
  });

  const onChangePage = useCallback((page) => {
    setAddressState(prevState => ({
      ...prevState,
      currentPage: page,
    }));
  }, []);

  useEffect(() => {
    setLoading(false);

    API.getAddress(match?.params.id, addressState.currentPage)
      .then(res => {
        // console.log(res.data)

        setAddressState(prevState => ({
          ...prevState,
          ...res.data,
        }));
        setLoading(true);
      })
      .catch(err => {
        console.log(err)

        history.push('/not-found')
      });

// eslint-disable-next-line
  }, [addressState.currentPage, match?.params.id]);


  return (
    <>
      <section className="section section-address">
        <div className="container">
          {!loading
            ? (
              <Spinner/>
            )
            : (
              <>
                <h2 className="title">{words.addressDetails}</h2>

                <div className="details__block">
                  <div className="detail">
                    <h6 className="detail__name">{words.address}:</h6>

                    <div className="copy__block">
                      <span className='text break-all copy__text'>{addressState.address}</span>

                      <CopyItem
                        name={words.address}
                        value={addressState.address}
                      />
                    </div>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.balance}:</h6>

                    <span className="amount">
                      <AmountFormat
                        type='snt'
                        amount={addressState.balance}
                      /> SNT

                    <span className='amount--dollar'>
                      <AmountFormat
                        type='usd'
                        amount={addressState.balance}
                      />
                    </span>
                  </span>
                  </div>
                </div>

                <h2 className="title">{words.transactionsList}</h2>

                <div className="transactions__block">
                  <div className="transactions-header">
                    <h6>{words.txnHash}</h6>

                    <h6>{words.age}</h6>

                    <h6>{words.from}</h6>

                    <h6>{words.to}</h6>

                    <h6>{words.type}</h6>

                    <h6>{words.amount} (SNT)</h6>
                  </div>

                  {
                    addressState.dataList.map((trans: any, index: number) => {
                      return (
                        <div
                          className={classModifier('transaction',
                            [
                              openedTrans === trans.hash && 'active',
                              (addressState.address !== trans.addressTo)
                                ? 'out'
                                : 'in'
                            ],
                          )}
                          key={index}>

                          <div className="transaction-cell-mobile">
                            <div className="transaction-cell-mobile__header">
                              <div className="transaction-cell-mobile__title-block">
                                <NavLink className='link link--ellipsis'
                                         to={ROUTES.setTxRoute(trans.hash)}>
                                  {trans.hash}
                                </NavLink>

                                <span className="text">
                                  <Moment date={trans.timestamp}
                                          utc
                                          locale={selectedLang}
                                          fromNow
                                  />
                                </span>
                              </div>

                              <span className="transaction-cell-mobile__amount">
                                <AmountFormat
                                  type='snt'
                                  amount={trans.amountTo}
                                /> SNT
                            </span>

                              <button
                                className='show-more'
                                onClick={() => setOpenedTrans(openedTrans === trans.hash
                                  ? null
                                  : trans.hash
                                )}
                              />
                            </div>
                          </div>

                          <div className="transaction-cell transaction-cell--sm tooltip__container">
                            <h6 className="transaction-cell__name">{words.hash}:</h6>

                            <NavLink className='link link--ellipsis'
                                     to={ROUTES.setTxRoute(trans.hash)}>
                              {trans.hash}
                            </NavLink>

                            <Tooltip
                              text={trans.hash}
                              type='hash'
                              media='desktop'
                            />
                          </div>

                          <div className="transaction-cell transaction-cell--sm transaction-cell-mobile">
                            <h6 className="transaction-cell__name">{words.block}:</h6>

                            <NavLink className='link'
                                     to={ROUTES.setBlockRoute(trans.block)}>
                              {trans.block}
                            </NavLink>
                          </div>

                          <div className="transaction-cell transaction-cell--desktop">
                            <span className="text tooltip__container">
                              <Moment date={trans.timestamp}
                                      utc
                                      locale={selectedLang}
                                      fromNow
                              />

                              <Tooltip
                                text={
                                  <Moment date={trans.timestamp}
                                          utc
                                          locale={selectedLang}
                                          format="MMMM-DD-YYYY HH:mm:ss +UTC"
                                  />
                                }
                                type='timestamp'
                                media='desktop'
                              />
                            </span>
                          </div>

                          <div className="transaction-cell transaction-cell--sm transaction-cell-mobile">
                            <h6 className="transaction-cell__name">{words.age}:</h6>

                            <span className="text">
                              <Moment date={trans.timestamp}
                                      utc
                                      locale={selectedLang}
                                      format="MMMM-DD-YYYY HH:mm:ss +UTC"
                              />
                            </span>
                          </div>

                          <div className="transaction-cell transaction-cell--sm tooltip__container">
                            <h6 className="transaction-cell__name">{words.from}:</h6>

                            <NavLink className='link link--ellipsis transaction-cell--link-in'
                                     to={ROUTES.setAddressRoute(trans.addressFrom)}>
                              {trans.addressFrom}
                            </NavLink>

                            <Tooltip
                              text={trans.addressFrom}
                              type='hash'
                              media='desktop'
                            />
                          </div>

                          <div className="transaction-cell transaction-cell--sm tooltip__container">
                            <h6 className="transaction-cell__name">{words.to}:</h6>

                              <NavLink className='link link--ellipsis transaction-cell--link-out'
                                       to={ROUTES.setAddressRoute(trans.addressTo)}>
                                {trans.addressTo}
                              </NavLink>

                              <Tooltip
                                text={trans.addressTo}
                                type='hash'
                                media='desktop'
                              />
                          </div>

                          <div className="transaction-cell transaction-cell--sm vertical-center">
                            <h6 className="transaction-cell__name">{words.type}:</h6>

                            {(addressState.address !== trans.addressTo)
                              ? <span className='status status--type status--failed'>{words.out}</span>
                              : <span className='status status--type status--completed'>{words.in}</span>}

                          </div>

                          <div className="transaction-cell transaction-cell--desktop">
                            <p className='text'>
                              {(addressState.address !== trans.addressTo)
                                ? <AmountFormat
                                  type='snt'
                                  amount={trans.amountFrom}
                                />
                                : <AmountFormat
                                  type='snt'
                                  amount={trans.amountTo}
                                />
                              }
                            </p>
                          </div>

                          <div className="transaction-cell transaction-cell--sm transaction-cell-mobile">
                            <h6 className="transaction-cell__name">{words.fee}:</h6>

                            <span className="text">
                              <AmountFormat
                                type='snt'
                                amount={trans.fee}
                              /> SNT
                            </span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>

                {addressState.last_page !== 1 &&
                <Pagination
                  pageCount={addressState.last_page}
                  onChange={onChangePage}
                  forcePage={addressState.currentPage - 1}
                />
                }

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

export default AddressPage;