// LIBRARY IMPORTS
import React from 'react';

// STYLED COMPONENTS
import { BuildControl, Label } from './BuildControl.styled';

const buildControl = props => (
  <BuildControl>
    <Label>{props.label}</Label>
    <button className="Less">Less</button>
    <button className="More">More</button>
  </BuildControl>
);

export default buildControl;
