// LIBRARY IMPORTS
import React from 'react';

// STYLED COMPONENTS
import BuildControls from './BuildControls.styled';
import BuildControl from './BuildControl/BuildControl.component';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = props => (
  <BuildControls>
    {controls.map(control => <BuildControl key={control.label} label={control.label} />)}
  </BuildControls>
);

export default buildControls;
