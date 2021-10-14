import React from 'react';


const Loader = props => {
  const {
    width = '200px',
    height = '75px',
  } = props;

  return (
    <svg
      {...{ width, height }}
      viewBox="0 40 52 20"
    >
      <circle fill="#4763EB" cx="6" cy="50" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin=".1" /></circle><circle fill="#7CF6FA" cx="26" cy="50" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin=".2" /></circle><circle fill="#E14076" cx="46" cy="50" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin=".3" />
      </circle>
    </svg>
  )
};

export default Loader;