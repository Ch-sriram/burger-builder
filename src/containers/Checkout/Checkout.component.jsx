// LIBRARY IMPORTS
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.component';
import ContactData from './ContactData/ContactData.component';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack(); // goes back to the previous page in the browser's history
  }
  
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    const purchasedRedirect = this.props.ings && this.props.purchased ? <Redirect to="/" /> : null;
    let summary = !this.props.ings ? <Redirect to="/" />
      : (
        <div>
          {purchasedRedirect}
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
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
