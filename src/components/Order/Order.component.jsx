import React from 'react';
import styled from 'styled-components';

const OrderDiv = styled.div`
  width: 80%;
  border: 1px solid #EEE;
  box-shadow: 0 2px 3px #CCC;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`; 

const order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => 
    <span
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #CCC',
        padding: '5px',
      }}
      key={ig.name}
    >
      {ig.name} ({ig.amount})
    </span>
  )

  return (
    <OrderDiv>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
    </OrderDiv>
  );
};

export default order;
