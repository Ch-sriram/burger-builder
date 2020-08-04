// LIBRARY IMPORTS
import React from 'react';

// STYLED COMPONENTS
import Burger from './Burger.styled';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.component';

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])]
        .map((_, index) => <BurgerIngredient key={ingredient + index} type={ingredient} />);
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  
  transformedIngredients = transformedIngredients.length === 0 ? <p>Please start adding ingredients!</p> : transformedIngredients;

  return (
    <Burger>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Burger>
  );
};

export default burger;
