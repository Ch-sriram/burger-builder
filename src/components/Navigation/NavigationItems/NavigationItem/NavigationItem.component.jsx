import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationItem = styled.div`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  & a {
    color: #8F5C2C;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    &:hover, &:active, &.active { color: #40A4CB; }
  }

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;

    & a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;

      &:hover, &:active, &.active {
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
        color: white;
      }
    }
  }
`;

const navigationItem = props => (
  <NavigationItem>
    <NavLink to={props.link} exact={props.exact}>
      {props.children}
    </NavLink>
  </NavigationItem>
);

export default navigationItem;
