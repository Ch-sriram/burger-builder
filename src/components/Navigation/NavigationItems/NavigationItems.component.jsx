// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// CUSTOM COMPONENT
import NavigationItem from './NavigationItem/NavigationItem.component';

// STYLED UL
const NavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  flex-flow: column;

  @media (min-width: 500px) { flex-flow: row; }
`;

const navigationItems = () => (
  <NavigationItems>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </NavigationItems>
);

export default navigationItems;
