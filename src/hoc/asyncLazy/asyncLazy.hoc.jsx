import React, { Component } from 'react';

const asyncLazy = importLazyComponent => {
  return class extends Component {
    state = { component: null, };
    
    componentDidMount() {
      importLazyComponent()
        .then(cmp => this.setState({ component: cmp.default }))
        .catch(err => err);
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
}

export default asyncLazy;
