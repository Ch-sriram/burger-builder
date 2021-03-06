import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderID: id,
    orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

// We can get the token from the Redux STORE in 2 ways:
//  1. Using getState method passed along with dispatch.
//  2. Passing the token to action creator through React.

// #1: Using getState method passed along with dispatch.
export const purchaseBurgerAsync = orderData => (
  (dispatch, getState) => {
    dispatch(purchaseBurgerStart());
    axios
      .post(`/orders.json?auth=${getState().auth.token}`, orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  }
);

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
}

export const fetchOrdersSuccess = orders => ({ type: actionTypes.FETCH_ORDERS_SUCCESS, orders });
export const fetchOrdersFail = error => ({ type: actionTypes.FETCH_ORDERS_FAIL, error });
export const fetchOrdersStart = () => ({ type: actionTypes.FETCH_ORDERS_START, });

// #2: Passing the token to fetchOrdersAsync() through React.
export const fetchOrdersAsync = (token, userId) => dispatch => {
  dispatch(fetchOrdersStart());
  const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
  axios
    .get(`/orders.json${queryParams}`)
    .then(res => {
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({ ...res.data[key], id: key });
      }
      dispatch(fetchOrdersSuccess(fetchedOrders));
      return res;
    })
    .catch(err => {
      dispatch(fetchOrdersFail());
      return err;
    });
};
