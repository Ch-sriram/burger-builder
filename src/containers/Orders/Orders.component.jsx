// LIBRARY IMPORTS
import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Order from '../../components/Order/Order.component';

class Orders extends Component {
  render() {
    return (
      <div style={{marginTop: '72px'}}>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders;
