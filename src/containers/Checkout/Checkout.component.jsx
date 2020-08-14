// LIBRARY IMPORTS
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// CUSTOM COMPONENTS
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.component';
import ContactData from './ContactData/ContactData.component';

class Checkout extends Component {
  state = {
    ingredients: { salad: 1, meat: 1, cheese: 1, bacon: 1, }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      // ['salad' : '1']
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients });
  }
  
  checkoutCancelledHandler = () => {
    this.props.history.goBack(); // goes back to the previous page in the browser's history
  }
  
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }
  
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={`${this.props.match.url}/contact-data`} component={ContactData} />
      </div>
    );
  }
}

export default Checkout;
