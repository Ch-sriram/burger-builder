import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary.hoc';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.component';

const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
}

export default layout;
