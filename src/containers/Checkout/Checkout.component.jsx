// LIBRARY IMPORTS
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.component';
import ContactData from './ContactData/ContactData.component';

class Checkout extends Component {
  // constructor(props) {
  //   super(props);
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let totalPrice = 0;
  //   for (let param of query.entries()) {
  //     // ['salad' : '1']  <-- each entry in query
  //     if (param[0] === 'price') {
  //       totalPrice = +param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.state = { ingredients, totalPrice };
  // }
  
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
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={`${this.props.match.url}/contact-data`}
          component={ContactData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ings: state.ingredients };
}

export default connect(mapStateToProps)(Checkout);
