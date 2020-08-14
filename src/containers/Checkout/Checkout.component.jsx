// LIBRARY IMPORTS
import React, { Component } from 'react';

// CUSTOM COMPONENTS
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.component';

class Checkout extends Component {
  // Dummy data in the state for now. Later on we will pass in 
  // data regarding ingredients, using Routing
  state = {
    ingredients: { salad: 1, meat: 1, cheese: 1, bacon: 1, }
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
      </div>
    );
  }
}

export default Checkout;
