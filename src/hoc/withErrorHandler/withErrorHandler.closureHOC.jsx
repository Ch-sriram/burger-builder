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

      axios.interceptors.request.use(req => {
        // we want to get rid of any previous errors whenever
        // we send our request
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(res => res, error => {
          // after getting the response, if there's an error,
          // we'll simply handle it as follows:
          this.setState({ error: error });
          return Promise.reject(error);
        }
      );
    }


    /**
     * Now, componentDidMount() is only called once the child
     * components are rendered, but whenever an error occurs,
     * we need it to be handled even if the child components
     * are going to render. And for that, the better way of
     * handling errors during axios requests/responses will
     * be inside the componentWillUpdate() lifecycle method,
     * and as it is deprecated now, we can handle the axios 
     * related errors inside the constructor() lifecycle hook.
     * 
     * And so, we will comment the code below, and update the 
     * constructor() method as shown above.
     */
    // componentDidMount() {
    //   axios.interceptors.request.use(req => {
    //     // we want to get rid of any previous errors whenever 
    //     // we send our request
    //     this.setState({ error: null });
    //     return req;
    //   })
    //   axios.interceptors.response.use(res => res, error => {
    //     // after getting the response, if there's an error, 
    //     // we'll simply handle it as follows:
    //     this.setState({ error: error });
    //     return Promise.reject(error);
    //   })
    // }

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
