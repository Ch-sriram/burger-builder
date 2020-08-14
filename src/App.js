// LIBRARY IMPORTS
import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Layout from './components/Layout/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.component';
import Checkout from './containers/Checkout/Checkout.component';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
