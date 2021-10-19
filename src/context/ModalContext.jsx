import React, { createContext, useCallback, useState } from 'react';


const ModalContext = createContext({
  modals: [],
  closedModals: [],
  openModal: (name, props) => { },
  closeModal: (name) => { },
});

ModalContext.displayName = 'ModalContext';

const ModalProvider = (props) => {
  const [modals, setModals] = useState([]);
  const [closedModals, setClosedModals] = useState([]);

  const openModal = useCallback((name, props) => {
    const newModal = { name, props };

    setModals(prev => [...prev, newModal]);
  }, []);

  const closeModal = useCallback((name) => {
    setClosedModals(prev => [...prev, name]);

    setTimeout(() => {
      setModals(prev => prev.filter(modal => modal.name !== name));
      setClosedModals(prev => prev.filter(modalName => modalName !== name));
    }, 400);
  }, []);

  return (
    <ModalContext.Provider
      {...props}
      value={{
        modals,
        openModal,
        closeModal,
        closedModals,
      }}
    />
  );
};

export { ModalProvider, ModalContext };