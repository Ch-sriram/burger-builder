// LIBRARY IMPORTS
import React from 'react';

// CUSTOM COMPONENTS
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';
import Backdrop from '../Backdrop/Backdrop.component';

// STYLED IMPORTS
import { Modal } from './Modal.styled';

const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <Modal
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </Modal>
  </Aux>
);

export default modal;
