import React from 'react';
import styled from 'styled-components';

const OrderDiv = styled.div`
  width: 100%;
  border: 1px solid #EEE;
  box-shadow: 0 2px 3px #CCC;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`; 

const order = props => (
  <OrderDiv>
    <p>Ingredients: Salad (1)</p>
    <p>Price: <strong>{`$$ 5.45`}</strong></p>
  </OrderDiv>
);

export default order;
