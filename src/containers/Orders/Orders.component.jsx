// LIBRARY IMPORTS
import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Order from '../../components/Order/Order.component';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.closureHOC';

class Orders extends Component {
  state = { orders: [], loading: true, }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        console.log(fetchedOrders);
        this.setState({ orders: fetchedOrders, loading: false });
        return res;
      })
      .catch(err => {
        this.setState({ loading: false });
        return err;
      })
  }

  render() {
    return (
      <div style={{marginTop: '72px'}}>
        <Order />
        <Order />
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
