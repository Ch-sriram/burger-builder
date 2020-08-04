// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

// STYLED COMPONENTS
import { BreadBottom, BreadTop, Salad, Bacon, Meat, Cheese } from './BurgerIngredient.styled';


const burgerIngredient = props => {
  switch (props.type) {
    case 'bread-top':
      return (
        <BreadTop>
          <div className="seeds"></div>          
          <div className="seeds2"></div>          
        </BreadTop>
      );
    case 'bread-bottom': return <BreadBottom />;
    case 'bacon': return <Bacon />;
    case 'meat': return <Meat />;
    case 'cheese': return <Cheese />;
    case 'salad': return <Salad />;
    default: return undefined;
  }
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default burgerIngredient;
