// LIBRARY IMPORTS
import React from 'react';
import styled from "styled-components";

// CUSTOM COMPONENTS
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.component';

// STYLED COMPONENTS
const Burger = styled.div`
  width: 80%;
  margin: auto;
  height: 250px;
  overflow-y: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;

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
