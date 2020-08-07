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
import Spinner from '../../components/UI/Spinner/Spinner.component';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.closureHOC';

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
    orderNow: false,
    loading: false,
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
    this.setState({ loading: true },
      () => {
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
    
        // We deliberately omit the `.json` in the route to 
        // introduce an error, to see how errors pan out.
        axios.post('/orders', order)
          .then(response => {
            this.setState({ loading: false, orderNow: false });
          })
          .catch(error => {
            this.setState({ loading: false, orderNow: false });
          });
    });
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = this.state.loading ?
      <Spinner /> : (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          orderCancelled={this.orderCancelHandler}
          orderContinued={this.orderContinueHandler}
        />
      );

    return (
      <Aux>
        <Modal show={this.state.orderNow} modalClosed={this.orderCancelHandler}>
          {orderSummary}
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

export default withErrorHandler(BurgerBuilder, axios);
