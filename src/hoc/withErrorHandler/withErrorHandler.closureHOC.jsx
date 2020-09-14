// LIBRARY IMPORTS
import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Modal from '../../components/UI/Modal/Modal.component';
import Aux from '../Auxiliary/Auxiliary.hoc';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component { 
    constructor(props) {
      super(props);
      this.state = { error: null, };

      // We will save the interceptor instance in the state:
      this.requestInterceptor = axios.interceptors.request.use(req => {
        // we want to get rid of any previous errors whenever
        // we send our request
        this.setState({ error: null });
        return req;
      });

      this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
          this.setState({ error: error });
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    } 
  }
}

export default withErrorHandler;
