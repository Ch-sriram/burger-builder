// LIBRARY IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import Aux from '../../hoc/Auxiliary/Auxiliary.hoc';
import Burger from '../../components/Burger/Burger.component';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component';
import Modal from '../../components/UI/Modal/Modal.component';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.component';
import Wrapper from '../../components/UI/Wrapper/Wrapper.component';
import Spinner from '../../components/UI/Spinner/Spinner.component';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.closureHOC';
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";

export class BurgerBuilder extends Component {
  state = {
    orderNow: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchasableState() {
    const ingredients = { ...this.props.ings };
    const sum = Object.keys(ingredients)
      .map((ingredient) => ingredients[ingredient])
      .reduce((currSum, el) => currSum + el, 0);
    return sum > 0;
  }

  orderNowHandler = () => {
    if (this.props.isAuth)
      this.setState({ orderNow: true });
    else {
      this.props.onSetAuthRedirectPath("/checkout");
      this.props.history.push("/auth");
    };
  }
  
  orderCancelHandler = () => this.setState({ orderNow: false });
  
  orderContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout')
  };

  render() {
    const disabledInfo = { ...this.props.ings };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null,
        burger = this.props.error ? <p style={{textAlign: 'center'}}>Ingredients can't be loaded!</p> : <Spinner />;

    if (this.props.ings) {
      burger = (
        <Wrapper>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchasableState()}
            price={this.props.price}
            ordered={this.orderNowHandler}
            isAuth={this.props.isAuth}
          />
        </Wrapper>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          orderCancelled={this.orderCancelHandler}
          orderContinued={this.orderContinueHandler}
        />
      );
    }

    return (
      <Aux>
        <Modal show={this.state.orderNow} modalClosed={this.orderCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

// REDUX STORE SETUP
const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null,
  }
};

// REDUX ACTIONs & Dispatch Calls
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingredientName => dispatch(actions.addIngredient(ingredientName)),
    onIngredientRemoved: ingredientName => dispatch(actions.removeIngredient(ingredientName)),
    onInitIngredients: () => dispatch(actions.initIngredientsAsync()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
