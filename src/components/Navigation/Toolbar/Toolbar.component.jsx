import React from 'react';
import styled from 'styled-components';

const Toolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703B09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  & nav {
    height: 100%;
  }
`;

const toolbar = props => (
  <Toolbar>
    <div>MENU</div>
    <div>LOGO</div>
    <nav>
      ...
    </nav>
  </Toolbar>
);

export default toolbar;
