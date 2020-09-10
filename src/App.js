// LIBRARY IMPORTS
import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import Layout from './components/Layout/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.component';
import Checkout from './containers/Checkout/Checkout.component';
import Orders from './containers/Orders/Orders.component';
import Auth from "./containers/Auth/Auth.component";
import Logout from "./containers/Auth/Logout/Logout.component";
import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    const routes = this.props.isAuth ? (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    ): (
      <Switch>
        <Route path="/auth" component={Auth} />
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
