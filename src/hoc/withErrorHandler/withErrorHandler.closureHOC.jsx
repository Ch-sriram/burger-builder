// LIBRARY IMPORTS
import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Modal from '../../components/UI/Modal/Modal.component';
import Aux from '../Auxiliary/Auxiliary.hoc';

/**
 * This withErrorHandler Closure HOC can be wrapped around any
 * kind of a component and we can use this HOC as a general
 * error handler.
 * 
 * And so, whenever we wrap other components with this HOC, 
 * i.e., withErrorHandler Closure HOC, what we are doing is,
 * (assume that we are using the same axios instance) we are 
 * creating and attaching multiple interceptors to the same
 * axios instance.
 * 
 * These interceptors create memory leaks when they're not 
 * properly released, and so, the releasing of these 
 * request/response interceptor instances have to be done by
 * the programmer who's programming the react app manually
 * inside the componentWillUnmount() lifecycle method using 
 * the axios.interceptors.request/response.eject(instance);
 */

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
          // after getting the response, if there's an error,
          // we'll simply handle it as follows:
          this.setState({ error: error });
          return Promise.reject(error);
        }
      );
    }

    componentDidMount() {
      console.log("[withErrorHandler.closureHOC.jsx] componentDidMount...", this.requestInterceptor, this.responseInterceptor);
    }

    componentWillUnmount() {
      console.log("[withErrorHandler.closureHOC.jsx] componentWillUnmount...", this.requestInterceptor, this.responseInterceptor);
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
