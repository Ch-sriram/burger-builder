// LIBRARY IMPORTS
import React, { Component } from 'react';
import styled from "styled-components";

// CUSTOM COMPONENTS
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';
import Backdrop from '../Backdrop/Backdrop.component';

const StyledModal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  /* height: calc(100vh - 60%); */
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 15%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  overflow-y: auto;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentDidUpdate() {
    console.log("[Modal] componentDidUpdate");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <StyledModal
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </StyledModal>
      </Aux>
    );
  }
};

export default Modal;
