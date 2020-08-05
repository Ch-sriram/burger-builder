import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary.hoc';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.component';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.component';

const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
}

export default layout;
