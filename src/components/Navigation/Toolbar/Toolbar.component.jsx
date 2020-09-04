// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// OUR CUSTOM COMPONENTS
import Logo from '../../Logo/Logo.component';
import NavigationItems from '../NavigationItems/NavigationItems.component';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.component';

// STYLED COMPONENTS - DEFINITIONS
const Toolbar = styled.header`
  height: 56px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: #703B09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  margin-bottom: -5px;

  & nav {
    height: 100%;
  }
`;

const LogoDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const DesktopNav = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`;

const toolbar = props => (
  <Toolbar>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <LogoDiv>
      <Logo />
    </LogoDiv>
    <DesktopNav>
      <NavigationItems isAuth={props.isAuth} />
    </DesktopNav>
  </Toolbar>
);

export default toolbar;
