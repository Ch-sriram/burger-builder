// LIBRARY IMPORTS
import axios from 'axios';

// CUSTOM COMPONENTS
import * as actionTypes from './actionTypes';

export const authStart = () => ({ type: actionTypes.AUTH_START, });

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData,
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const auth = (email, password) => dispatch => {
  dispatch(authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };
  axios
    .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBCsIqRpXyn4Y3eYRikUd9uhe71UOq-NMA', authData)
    .then(res => {
      console.log(res);
      dispatch(authSuccess(res.data));
      return res;
    })
    .catch(err => {
      console.log(err);
      dispatch(authFail(err));
    });
}
