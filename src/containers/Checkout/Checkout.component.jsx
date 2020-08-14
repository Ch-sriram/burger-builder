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
  
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients}/>
      </div>
    );
  }
}

export default Checkout;
