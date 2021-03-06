// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// CUSTOM COMPONENTS
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';

// STYLED IMPORTS
import { StyledButton as Button } from '../../UI/Buttons/StyledButton.styled';

const UL = styled.ul`list-style-type: circle;`;

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredient => (
      <li key={ingredient}>
        <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
      </li>
    ));
  
  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <p>A delicious burger with the following ingredients:</p>
      <UL>{ingredientSummary}</UL>
      <h4>Price: ${props.price.toFixed(2)}</h4>
      <p>Continue to Checkout?</p>
      <Button
        type="danger"
        onClick={props.orderCancelled}>CANCEL</Button>
      <Button
        type="success"
        onClick={props.orderContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
