// LIBRARY IMPORTS
import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import Layout from './components/Layout/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.component';
import Logout from "./containers/Auth/Logout/Logout.component";
import * as actions from "./store/actions/index";
import asyncLazy from "./hoc/asyncLazy/asyncLazy.hoc";

// Lazy Loading the Containers
const asyncCheckout = asyncLazy(() => import("./containers/Checkout/Checkout.component"));
const asyncOrders = asyncLazy(() => import("./containers/Orders/Orders.component"));
const asyncAuth = asyncLazy(() => import("./containers/Auth/Auth.component"));

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    const routes = this.props.isAuth ? (
      <Switch>
        <Route path="/checkout" component={asyncCheckout} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    ): (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.token !== null,
});

const mapDispatchToProps = dispatch => ({
  onTryAutoSignup: () => dispatch(actions.authCheckState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
