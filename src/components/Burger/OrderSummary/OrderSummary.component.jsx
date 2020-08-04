// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// CUSTOM COMPONENTS
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';

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
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <UL>{ingredientSummary}</UL>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
