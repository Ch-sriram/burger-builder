// LIBRARY IMPORTS
import React from 'react';

// STYLED COMPONENTS
import { BuildControls, OrderButton } from './BuildControls.styled';
import BuildControl from './BuildControl/BuildControl.component';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <BuildControls>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <OrderButton
      disabled={!props.purchasable}
      onClick={props.ordered}>ORDER NOW</OrderButton>
  </BuildControls>
);

export default buildControls;
