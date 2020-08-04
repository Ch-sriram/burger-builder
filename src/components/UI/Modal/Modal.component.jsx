// LIBRARY IMPORTS
import React from 'react';

// STYLED IMPORTS
import { Modal } from './Modal.styled';

const modal = props => (
  <Modal>
    {props.children}
  </Modal>
);

export default modal;
