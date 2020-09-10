// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// CUSTOM COMPONENTS
import Logo from '../../Logo/Logo.component';
import NavigationItems from '../NavigationItems/NavigationItems.component';
import Backdrop from '../../UI/Backdrop/Backdrop.component';
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';

const SideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform .3s ease-out;
  transform: ${props => props.status.toLowerCase() === 'open' ? 'translateX(0)' : 'translateX(-100%)'};

  @media (min-width: 500px) {
    display: none;
  }
`;

const LogoDiv = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

const sideDrawer = props => {
  console.log(props);
  const status = props.open ? "open" : "closed";
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <SideDrawer status={status} onClick={props.closed}>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </SideDrawer>
    </Aux>
  );
};

export default sideDrawer;
