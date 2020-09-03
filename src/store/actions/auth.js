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
}
