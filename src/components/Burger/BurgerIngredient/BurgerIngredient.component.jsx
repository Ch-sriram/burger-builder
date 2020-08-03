import React from 'react';
import { BreadBottom, BreadTop, Salad, Bacon, Meat, Cheese } from './BurgerIngredient.styled';


const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-top':
      ingredient = <BreadTop className="seeds seeds2" />; break;
    case 'bread-bottom': ingredient = BreadBottom; break;
    case 'bacon': ingredient = Bacon; break;
    case 'salad': ingredient = Salad; break;
    case 'meat': ingredient = Meat; break;
    case 'cheese': ingredient = Cheese; break;
    default: ingredient = null; break;
  }

  return ingredient;
};

export default burgerIngredient;
