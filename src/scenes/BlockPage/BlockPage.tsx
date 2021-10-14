import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';

import Moment from 'react-moment';

import API from '../../api/api';
import { MultiLangContext } from "../../context/MultiLang/MultiLang";
import { ROUTES } from "../../config/constants";

import { IMatchParams } from "../../interfaces/interfaces";

import Spinner from '../../components/Spinner';
import CopyItem from "../../components/CopyItem/CopyItem";
import './BlockPage.scss';


const BlockPage = () => {
  const history = useHistory();
  const {words, selectedLang} = useContext(MultiLangContext);
  const match = useRouteMatch<IMatchParams>('/block/:id');

  const [loading, setLoading] = useState(false);
  const [blockState, setBlockState] = useState<{
    hash: string;
    height: number;
    previousHash: string;
    timestamp: number;
    txHashes: any;
  }>({
    hash: '',
    height: 0,
    previousHash: '',
    timestamp: 0,
    txHashes: [],
  });

  useEffect(() => {
    setLoading(false);

    API.getBlock(match?.params.id)
      .then(res => {
        // console.log(res.data)

        setBlockState(prevState => ({
          ...prevState,
          ...res.data,
        }));
        setLoading(true);
      })
      .catch(err => {
        console.log(err);

        history.push('/not-found')
      });
    // eslint-disable-next-line
  }, [history, match?.params.id]);


  return (
    <>
      <section className="section section-block">
        <div className="container">
          {!loading
            ? (
              <Spinner/>
            )
            : (
              <>
                <h2 className="title">{words.blockDetails}</h2>

                <div className="details__block">
                  <div className="detail">
                    <h6 className="detail__name">{words.blockHash}:</h6>

                    <div className="copy__block">
                      <span className='text break-all copy__text'>{blockState.hash}</span>

                      <CopyItem
                        name={words.hash}
                        value={blockState.hash}
                      />
                    </div>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.blockNumber}:</h6>

                    <span className="text">
                    {blockState.height}
                  </span>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.timestamp}:</h6>

                    <span className="text">
                      <Moment date={blockState.timestamp}
                              utc
                              locale={selectedLang}
                              fromNow
                      />

                      <Moment date={blockState.timestamp}
                              utc
                              locale={selectedLang}
                              format=" (MMMM-DD-YYYY HH:mm:ss +UTC)"
                      />
                    </span>
                  </div>

                  <div className="detail">
                    <h6 className="detail__name">{words.txCount}:</h6>

                    <span className="text">
                    {blockState.txHashes.length}
                  </span>
                  </div>
                </div>

                <h2 className="title">{words.transactions}</h2>

                <div className="transaction-links">
                  {
                    blockState.txHashes.map((trans: string, index: number) => {
                      return (
                        <div key={index}
                             className='transaction-links__content'>
                          <span className="text text--700">{index + 1}.</span>

                          <NavLink to={ROUTES.setTxRoute(trans)}
                                   className="transaction-links__hash">
                            {trans}
                          </NavLink>

                          <div className='transaction-links__icon'>
                            <CopyItem
                              name={words.hash}
                              value={trans}
                            />
                          </div>
                        </div>
                      )
                    })
                  }
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

export default BlockPage;