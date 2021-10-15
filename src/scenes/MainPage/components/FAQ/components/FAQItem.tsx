import React from 'react';
import {IFAQItemProps} from "../FAQ.types";

const FAQItem = (props: IFAQItemProps) => {
  const {
    ask,
    activeItem,
    setActiveItem,
  } = props;

  return (
    <li
      className="FAQ__item"
      data-is-active={activeItem}>
      <h5
        onClick={() => {
          setActiveItem(
            activeItem
              ? null
              : ask
          )
        }}
      >
        {ask}

        <span className="FAQ__icon"></span>
      </h5>

      {props.children}
    </li>
  )
}

export default FAQItem;