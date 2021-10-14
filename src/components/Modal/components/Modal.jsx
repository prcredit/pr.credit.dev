import React, { Suspense, useCallback, useContext, useEffect, useRef } from 'react';

import { ModalContext } from '../../../context/ModalContext';
import { classModifier } from '../../../utils';

const fallback = <div>Loadning...</div>


const Modal = (props) => {
  const {
    modal,
    Component,
  } = props;

  const {
    closeModal,
    closedModals,
  } = useContext(ModalContext);

  const modalWrapRef = useRef(null);

  useEffect(() => {
    let isClosing = false;

    const onClick = (e) => {
      const isClickOnOutside = e.target === modalWrapRef.current;

      if (isClickOnOutside && !isClosing) {
        isClosing = true;
        closeModal(modal.name);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && !isClosing) {
        isClosing = true;
        closeModal(modal.name);
      }
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line
  }, []);

  const onClose = useCallback(() => {
    closeModal(modal.name);
  }, [closeModal, modal]);

  return (
    <div
      className={classModifier('modal-wrap', [
        closedModals.includes(modal.name) && 'closed',
      ])}
      key={modal.name}
      ref={modalWrapRef}
    >
      <Suspense fallback={fallback}>
        <Component
          {...modal.props}
          closeModal={onClose}
        />
      </Suspense>
    </div>
  )
}

export default Modal;