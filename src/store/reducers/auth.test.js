/**
 * We never test the Redux STORE's connection to the React App
 * (or vice-versa). So then, how do we test anything related to
 * Redux? The answer is, YES, we test Redux, but we have to be
 * careful about what we test. We probably don't want to test
 * any complex chains of actions, reducers and state, and yet,
 * the reducers are the main thing we want to test, 
 * especially if we follow the pattern of not putting too much
 * logic in the Action Creators - in that case, testing 
 * reducers is actually really simple.
 * 
 * Testing reducers is simple because they're synchronous by 
 * nature (no need of dealing with async code), and also, 
 * they're just functions, and so, we pass something in, and 
 * we get something out.
 */

import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirect: "/",
    });
  });

  test('should store the token upon login', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirect: "/",
    }, {
        type: actionTypes.AUTH_SUCCESS,
        idToken: 'some-token',
        userId: 'some-user-id',
    })).toEqual({
      token: 'some-token',
      userId: 'some-user-id', // test fails if 'some-user' instead of 'some-user-id' -- should be same as defined above in the action for the reducer() method.
      error: null,
      loading: false,
      authRedirect: "/",
    });
  });
});
