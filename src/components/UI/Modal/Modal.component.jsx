// LIBRARY IMPORTS
import React from 'react';

// STYLED IMPORTS
import { Modal } from './Modal.styled';

const modal = props => (
  <Modal style={{
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
  }}>
    {props.children}
  </Modal>
);

export default modal;
