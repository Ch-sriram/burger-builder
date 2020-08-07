// LIBRARY IMPORTS
import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Modal from '../../components/UI/Modal/Modal.component';
import Aux from '../Auxiliary/Auxiliary.hoc';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component { 
    state = {
      error: null,
    }

    /**
     * We can also make this a functional component and use 
     * useEffect() hook instead of componentDidMount() method
     * to handle global axios interceptors for error handling.
     */
    componentDidMount() {
      axios.interceptors.request.use(req => {
        // we want to get rid of any previous errors whenever 
        // we send our request
        this.setState({ error: null });
        return req;
      })
      axios.interceptors.response.use(res => res, error => {
        // after getting the response, if there's an error, 
        // we'll simply handle it as follows:
        this.setState({ error: error });
        return Promise.reject(error);
      })
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
