// LIBRARY IMPORTS
import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Aux from '../../hoc/Auxiliary/Auxiliary.hoc';
import Burger from '../../components/Burger/Burger.component';
// import { BreadTop, BreadBottom, Meat } from '../../components/Burger/BurgerIngredient/BurgerIngredient.styled';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0, 
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
