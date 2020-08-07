// LIBRARY IMPORTS
import React, { Component } from 'react';
import axios from '../../axios-orders';

// CUSTOM COMPONENTS
import Aux from '../../hoc/Auxiliary/Auxiliary.hoc';
import Burger from '../../components/Burger/Burger.component';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component';
import Modal from '../../components/UI/Modal/Modal.component';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.component';
import Wrapper from '../../components/UI/Wrapper/Wrapper.component';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0, 
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    orderNow: false
  };

  updatePurchasableState() {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map(ingredient => ingredients[ingredient])
      .reduce((currSum, el) => currSum + el, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    }, () => {this.updatePurchasableState()});
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    }, () => {this.updatePurchasableState()});
  };

  orderNowHandler = () => {
    this.setState({ orderNow: true });
  }

  orderCancelHandler = () => {
    this.setState({ orderNow: false });
  }

  orderContinueHandler = () => {
    /**
     * NOTE: for production ready apps, we calculate the price
     * at the server, because the client shouldn't have access
     * to change the prices at their end.
     * 
     * Also, we are filling some customer information here
     * manually, but later, we will add a form, where the user
     * will fill in the form, and we will get the data 
     * dynamically.
     */
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Ch. Sriram",
        address: {
          street: "Crazy Street",
          zipCode: "51251",
          country: "Zambia"
        },
        email: "test@crazy.com",
        deliveryMethod: "fastest"
      }
    }

    /**
     * The baseURL is taken care automatically by the axios
     * instance we have. The route we add for a firebase DB is
     * always appended with `.json` extension as firebase works
     * that way.
     */
    axios.post('/orders.json', order)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.orderNow} modalClosed={this.orderCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            orderCancelled={this.orderCancelHandler}
            orderContinued={this.orderContinueHandler}
          />
        </Modal>
        <Wrapper>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            ordered={this.orderNowHandler}
          />
        </Wrapper>
      </Aux>
    );
  }
}

export default BurgerBuilder;
