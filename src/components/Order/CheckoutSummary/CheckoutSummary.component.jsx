// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// CUSTOM COMPONENTS
import Burger from '../../Burger/Burger.component';
import { StyledButton as Button } from '../../UI/Buttons/StyledButton.styled';

// STYLED COMPONENTS
const CheckoutDiv = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  & > div {
    width: 100%;
    margin: auto;
  }

  @media (min-width: 600px) {
    width: 500px;
  }
`;

// RENDERED JSX COMPONENT
const checkoutSummary = props => {
  return (
    <CheckoutDiv>
      <h1>We hope it tastes well!</h1>
      <div><Burger ingredients={props.ingredients} /></div>
      <Button
        type="danger"
        onClick={() => { }}>CANCEL</Button>
      <Button
        type="success"
        onClick={() => { }}>CONTINUE</Button>
    </CheckoutDiv>
  );
}

export default checkoutSummary;
