import { useEffect, useState } from 'react';

import usePrevious from '../../hooks/usePrevious';


// Use when we need animate element before he will unmount
const DelayedComponent = (props) => {
  const {
    isMount,
    delayUnmountTime,
  } = props;

  const [shouldRender, setShouldRender] = useState(isMount);
  const prevIsMount = usePrevious(isMount);

  useEffect(() => {
    let timer;

    if (prevIsMount && !isMount) {
      timer = setTimeout(() => {
        setShouldRender(false);
      }, delayUnmountTime || 500);
    }
    else if (!prevIsMount && isMount) {
      setShouldRender(true)
    }

    return () => {
      clearTimeout(timer);
    }
  }, [shouldRender, isMount, prevIsMount, delayUnmountTime]);

  return shouldRender
    ? props.children
    : null;
}

export default DelayedComponent;