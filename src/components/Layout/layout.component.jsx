// LIBRARY IMPORTS
import React, { Component } from 'react';
import styled from 'styled-components';

// CUSTOM COMPONENTS
import Aux from '../../hoc/Auxiliary/Auxiliary.hoc';
import Toolbar from '../Navigation/Toolbar/Toolbar.component';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.component';

// STYLED COMPONENTS
const MainContent = styled.main`
  margin-top: 72px;
`;

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <MainContent>
          {this.props.children}
        </MainContent>
      </Aux>
    );
  }
}

export default Layout;
