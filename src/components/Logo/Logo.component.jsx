import React from 'react';
import styled from 'styled-components';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = styled.div`
  background-color: white;
  padding: 8px;
  height: 80%;
  box-sizing: border-box;
  border-radius: 8px;

  & img { height: 100%; }
`;

const logo = props => (
  <Logo>
    <img src={burgerLogo} alt="MyBurger" />
  </Logo>
);

export default logo;
