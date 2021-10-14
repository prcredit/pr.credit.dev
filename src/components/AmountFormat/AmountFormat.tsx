import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';

import { IInfo } from "../../interfaces/interfaces";


interface IAmountFormatProps {
  data: IInfo;
  type: 'usd' | 'snt';
  amount: number;
}


const AmountFormat = (props: IAmountFormatProps) => {
  const {
    data,
    type,
    amount,
  } = props;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isNaN(data.price)) {
      setLoading(true);
    }
  }, [data.price]);


  return (
    <>
      {type === 'snt' &&
      (
        <>
          {amount.toLocaleString('en-EN', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 4
          })}
        </>
      )
      }

      {type === 'usd' &&
      (!loading
        ? (
          <>($0)</>
        )
        : (
          <>
            (${(amount * Number(data.price)).toLocaleString('en-EN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })})
          </>
        ))
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  data: state.data.list,
});

export default connect(mapStateToProps)(AmountFormat)