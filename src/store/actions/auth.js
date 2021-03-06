// LIBRARY IMPORTS
import axios from 'axios';

// CUSTOM COMPONENTS
import * as actionTypes from './actionTypes';

export const authStart = () => ({ type: actionTypes.AUTH_START, });
export const authFail = error => ({ type: actionTypes.AUTH_FAIL, error, });
export const authSuccess = (idToken, userId) => ({ type: actionTypes.AUTH_SUCCESS, idToken, userId, });

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return { type: actionTypes.AUTH_LOGOUT, };
};

export const checkAuthTimeout = expirationTime => dispatch => {
  setTimeout(() => {
    dispatch(logout());
  }, expirationTime * 1000); // Default expirationTime is 3600. 3600ms * 1000 = 3600000ms = 3600s = 1hr.
};

export const auth = (email, password, isSignup) => dispatch => {
  dispatch(authStart());

  // Expected REQUEST BODY format for Firebase: https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  // API Key
  const API_KEY = "AIzaSyBCsIqRpXyn4Y3eYRikUd9uhe71UOq-NMA";

  // Sign-In Link: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  const signIn = "signInWithPassword",
    signUp = "signUp";
  let url = isSignup
    ? `https://identitytoolkit.googleapis.com/v1/accounts:${signUp}?key=${API_KEY}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:${signIn}?key=${API_KEY}`;

  axios
    .post(url, authData)
    .then((res) => {
      const { idToken, localId, expiresIn } = res.data;
      // whenever we refresh the webapp, the login information
      // is lost, and so, we will store the token for 3600 
      // seconds, which is 60 minutes = 1 hour, in our local 
      // state persistently using the localStorage API.
      localStorage.setItem("token", idToken);
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("userId", localId);
      dispatch(authSuccess(idToken, localId));
      dispatch(checkAuthTimeout(expiresIn));
    })
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err));
    });
};

export const setAuthRedirectPath = path => ({ type: actionTypes.SET_AUTH_REDIRECT_PATH, path });

export const authCheckState = () => dispatch => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(localStorage.getItem("expirationDate"));
    if (expirationDate > new Date()) {
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
      dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    } else {
      dispatch(logout());
    }
  }
}
