import React, { useEffect } from 'react';

import './Modal.scss';


const Modal = (props: any) => {
  const {
    closeModal,
    isOpen,
    children,
  } = props;

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (!!closeModal && e.code === "Escape") {
        closeModal();
      }
    }
    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    }
  }, [closeModal]);

  const handleCloseModal = (e: any) => {
    if (!closeModal) return;

    if (e.target.className !== "modal show") {
      return;
    }
    closeModal();
  }

  return (
    <div
      className={`modal show${!isOpen ? ' out' : ''}`}
      onMouseDown={handleCloseModal}
    >
      {children}
    </div>
  )
};

export default Modal;