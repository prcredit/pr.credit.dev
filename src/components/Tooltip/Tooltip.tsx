import React from 'react';

import { ITooltipProps } from "./Tooltip.types";

import './Tooltip.scss';


const Tooltip = (props: ITooltipProps) => {
  const {
    text,
    type,
    media,
  } = props;


  return (
    <div className={`tooltip tooltip--${type} tooltip--${media}`}>
      <p className='tooltip__text'>
        {text}
      </p>
    </div>
  )
};

export default Tooltip;