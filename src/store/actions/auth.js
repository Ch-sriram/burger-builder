// LIBRARY IMPORTS
import axios from 'axios';

// CUSTOM COMPONENTS
import * as actionTypes from './actionTypes';

export const authStart = () => ({ type: actionTypes.AUTH_START, });
export const authFail = error => ({ type: actionTypes.AUTH_FAIL, error, });
export const authSuccess = (idToken, userId) => ({ type: actionTypes.AUTH_SUCCESS, idToken, userId, });
export const logout = () => ({ type: actionTypes.AUTH_LOGOUT, });

export const checkAuthTimeout = expirationTime => dispatch => {
  setTimeout(() => {
    dispatch(logout());
  }, expirationTime * 1000); // Default expirationTime is 3600. 3600ms * 1000 = 3600000ms = 3600s = 1hr.
};

export const auth = (email, password, isSignup) => dispatch => {
  dispatch(authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  // API Key
  const API_KEY = "AIzaSyBCsIqRpXyn4Y3eYRikUd9uhe71UOq-NMA";

  // Sign-In Link: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  const signIn = "signInWithPassword", signUp = "signUp";
  let url = isSignup ? `https://identitytoolkit.googleapis.com/v1/accounts:${signUp}?key=${API_KEY}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:${signIn}?key=${API_KEY}`;
  
  axios
    .post(url, authData)
    .then((res) => {
      console.log(res);
      const { idToken, localId, expiresIn } = res.data;
      dispatch(authSuccess(idToken, localId));
      dispatch(checkAuthTimeout(expiresIn));
    })
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err));
    });
};

export const setAuthRedirectPath = path => ({ type: actionTypes.SET_AUTH_REDIRECT_PATH, path });
