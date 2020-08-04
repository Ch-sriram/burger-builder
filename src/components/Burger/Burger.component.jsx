// LIBRARY IMPORTS
import React from 'react';

// STYLED COMPONENTS
import Burger from './Burger.styled';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.component';

const burger = props => {
  return (
    <Burger>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </Burger>
  );
};

export default burger;
