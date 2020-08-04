import React from 'react';
import styled from 'styled-components';

const NavigationItem = styled.div`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;

  & a {
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    box-sizing: border-box;
    display: block;

    &:hover,
    &:active,
    &.active {
      background-color: #8F5C2C;
      border-bottom: 4px solid #40A4C8;
    }
  }
`;

const navigationItem = (props) => (
  <NavigationItem>
    <a
      href={props.link}
      className={props.active ? 'active' : null}
    >
      {props.children}
    </a>
  </NavigationItem>
);

export default navigationItem;
