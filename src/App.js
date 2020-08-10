// Library Imports
import React, { Component } from 'react';

// Our Components
import Layout from './components/Layout/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.component';

/**
 * For the time being, we will just test the legibility of the
 * statement: 
 *  `axios.interceptors.request/response.eject(axiosInstance);`
 * and see to it whether it will be called after the 
 * BurgerBuilder Component is unmounted. For that, we will just
 * maintain a fake state inside the App component, to  un-show 
 * the component depending on some condition.
 */

class App extends Component {
  state = { show: true, };

  componentDidMount() {
    console.log("[App.js] componentDidMount...");
    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  render() {
    return (
      <div>
        <Layout>
          {this.state.show ? <BurgerBuilder /> : null}
        </Layout>
      </div>
    );
  }
}

export default App;
