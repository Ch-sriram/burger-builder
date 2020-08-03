// Library Imports
import React, { Component } from 'react';

// Our Components
import Layout from './components/Layout/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.component';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
