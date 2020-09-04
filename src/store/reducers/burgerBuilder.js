import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const ADD = true, SUBTRACT = false;

const modifyIngredient = (state, action, modifier) => {
  const updatedIngredient = {
    [action.ingredientName]:
      modifier === ADD
        ? state.ingredients[action.ingredientName] + 1
        : state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice:
      modifier === ADD
        ? state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        : state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
  let price = initialState.totalPrice;
  for (let ingredient of Object.entries(action.ingredients)) 
    price += INGREDIENT_PRICES[ingredient[0]] * ingredient[1];
  
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: price,
    error: false,
    building: false,
  });
}

const fetchIngredientsFailed = (state, action) => updateObject(state, { error: true, });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return modifyIngredient(state, action, ADD);
    case actionTypes.REMOVE_INGREDIENT: return modifyIngredient(state, action, SUBTRACT);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
    default: return state;
  }
};

export default reducer;
