import React from 'react';

import '../styles/spinner.scss';


const Spinner = (props: any) => {
  const {
    size = '30px',
    color = 'black',
    className = '',
    style = {},
  } = props;

  return (
    <div
      className={`spinner spinner--${color} ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    />
  )
};

export default Spinner;