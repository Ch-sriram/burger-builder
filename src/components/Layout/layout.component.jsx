// LIBRARY IMPORTS
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import Aux from '../../hoc/Auxiliary/Auxiliary.hoc';
import Toolbar from '../Navigation/Toolbar/Toolbar.component';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.component';

// STYLED COMPONENTS
const MainContent = styled.main`
  margin-top: 72px;
  
  @media (min-width: 600px) {
    margin-top: 0;
  }
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
        <Toolbar
          isAuth={this.props.isAuth}
          drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          isAuth={this.props.isAuth}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <MainContent>
          {this.props.children}
        </MainContent>
      </Aux>
    );
  }
};

const mapStateToProps = state => ({ isAuth: state.auth.token !== null });

export default connect(mapStateToProps)(Layout);
