// LIBRARY IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import Order from '../../components/Order/Order.component';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.closureHOC';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner.component';

class Orders extends Component {
  state = { orders: [], loading: true, }

  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    const ordersList = this.props.loading ?
      <Spinner /> : (
        this.props.orders.map(order =>
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        )
      );
    return (
      <div>
        {ordersList.length > 0 ?
          ordersList :
          <p style={{ 'textAlign': 'center' }}>
            There are no orders made by you!
          </p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.order.orders,
  loading: state.order.loading,
  token: state.auth.token,
  userId: state.auth.userId
});

const mapDispatchToProps = dispatch => ({
  onFetchOrders: (token, userId) => dispatch(actions.fetchOrdersAsync(token, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
