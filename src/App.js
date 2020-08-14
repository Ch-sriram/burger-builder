// LIBRARY IMPORTS
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// CUSTOM COMPONENTS
import Layout from './components/Layout/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.component';
import Checkout from './containers/Checkout/Checkout.component';
import Orders from './containers/Orders/Orders.component';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
