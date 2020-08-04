// LIBRARY IMPORTS
import React from 'react';

// STYLED COMPONENTS
import Burger from './Burger.styled';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.component';

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])]
        .map((_, index) => <BurgerIngredient key={ingredient + index} type={ingredient} />);
    });
  console.log(transformedIngredients);
  return (
    <Burger>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Burger>
  );
};

export default burger;
