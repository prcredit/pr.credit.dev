import React from 'react';
import SVG_ICONS from './SvgIcon.icons';


const SvgIcon = props => {
  const {
    name,
    size,
    fill,
  } = props;

  const SvgComponent = SVG_ICONS[name];

  return (
    <SvgComponent
      fill={fill}
      width={size}
      height={size}
    />
  )
};

export default SvgIcon;