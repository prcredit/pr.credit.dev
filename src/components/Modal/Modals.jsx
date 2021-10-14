import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

import { MODAL_TYPES } from '../../config/constants';
import { ModalContext } from '../../context/ModalContext';

import Modal from './components/Modal';
import Loadable from './Loadable';


const MODAL_COMPONENTS = {
  [MODAL_TYPES.round1] : Loadable.Round1,
}

const Modals = () => {
  const { modals } = useContext(ModalContext);

  const modalRoot = document.getElementById("modal-root");

  return modalRoot && (
    ReactDOM.createPortal(
      modals.map(modal =>
        <Modal
          key={modal.name}
          modal={modal}
          Component={MODAL_COMPONENTS[modal.name]}  
        />
      ),
      modalRoot
    )
  )
};

export default Modals;