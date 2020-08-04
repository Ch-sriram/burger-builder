// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

// STYLED COMPONENTS
import { BreadBottom, BreadTop, Salad, Bacon, Meat, Cheese } from './BurgerIngredient.styled';


const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-top': 
      ingredient = (
        <BreadTop>
          <div className="seeds"></div>          
          <div className="seeds2"></div>          
        </BreadTop>
      );
      break;
    case 'bread-bottom': ingredient = BreadBottom; break;
    case 'bacon': ingredient = Bacon; break;
    case 'salad': ingredient = Salad; break;
    case 'meat': ingredient = Meat; break;
    case 'cheese': ingredient = Cheese; break;
    default: ingredient = null; break;
  }

  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default burgerIngredient;
