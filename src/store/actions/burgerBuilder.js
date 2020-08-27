import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = ingName => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName,
  };
};

export const removeIngredient = ingName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName,
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  }
}

/**
 * Fetch the default ingredients data from the DB here:
 *  https://burger-builder-ram.firebaseio.com/ingredients
 * 
 * NOTE: we have to append `.json` at the end of the API
 * endpoint in case of firebase db.
 */
export const initIngredientsAsync = () => {
  return dispatch => {
    axios
      .get("https://burger-builder-ram.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
        return error;
      });
  };  
};
