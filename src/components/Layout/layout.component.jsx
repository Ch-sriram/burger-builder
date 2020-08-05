import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary.hoc';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.component';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.component';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
