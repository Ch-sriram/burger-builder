// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// OUR CUSTOM COMPONENTS
import Logo from '../../Logo/Logo.component';
import NavigationItems from '../NavigationItems/NavigationItems.component';

// Custom Toolbar
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

const LogoDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const toolbar = props => (
  <Toolbar>
    <div>MENU</div>
    <LogoDiv>
      <Logo />
    </LogoDiv>
    <nav>
      <NavigationItems />
    </nav>
  </Toolbar>
);

export default toolbar;
