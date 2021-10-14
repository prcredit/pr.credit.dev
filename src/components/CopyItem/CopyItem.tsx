import React, {useState, useContext} from 'react';

import {MultiLangContext} from "../../context/MultiLang/MultiLang";
import {classModifier, copyToClipboard} from '../../utils';

import { ICopyItemProps } from "./CopyItem.types";

import './CopyItem.scss';


const CopyItem = (props: ICopyItemProps) => {
  const {
    name,
    value,
  } = props;

  const {words} = useContext(MultiLangContext);
  const [isShown, setIsShown] = useState(false);


  const onCopy = () => {
    copyToClipboard(value);

    setIsShown(true);

    setTimeout(() => {
      setIsShown(false);
    }, 3000)
  };


  return (
    <>
      <div className={classModifier('copy__icon',
        [
          isShown && 'done'
        ],
      )}
           onClick={() => onCopy()}
      >
      </div>

      <div className={classModifier('copy-tooltip',
        [
          isShown && 'done'
        ],
      )}
      >
        <p className="text copy-tooltip__text">
          {/*<span className='text--700'></span>*/}
          {!isShown
            ? <>{words.copy} {name} {words.toClipboard}</>
            : <>{words.copied}</>
          }
        </p>
      </div>
    </>
  )
};

export default CopyItem;