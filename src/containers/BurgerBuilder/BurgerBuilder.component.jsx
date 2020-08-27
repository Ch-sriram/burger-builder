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
import * as actionTypes from "../../store/actions/actionTypes";

class BurgerBuilder extends Component {
  state = {
    orderNow: false,
    loading: false,
    error: false,
  };

  /**
   * Fetch the default ingredients data from the DB here:
   *  https://burger-builder-ram.firebaseio.com/ingredients
   * 
   * NOTE: we have to append `.json` at the end of the API
   * endpoint in case of firebase db.
   */
  // componentDidMount() {
  //   axios.get("https://burger-builder-ram.firebaseio.com/ingredients.json")
  //     .then(response => {
  //       this.setState({ ingredients: response.data },
  //         () => {
  //           const purchasableInfo = { ...this.state.ingredients };
  //           for (let key in purchasableInfo) {
  //             if (this.state.purchasable) {
  //               break;
  //             }
  //             if (purchasableInfo[key] > 0) {
  //               this.setState({ purchasable: true });
  //             }
  //           }
  //         });
  //     })
  //     .catch(error => {
  //       this.setState({ error: true }, () => console.log(error));
  //       return error;
  //     });
  // }

  updatePurchasableState() {
    const ingredients = { ...this.props.ings };
    const sum = Object.keys(ingredients)
      .map((ingredient) => ingredients[ingredient])
      .reduce((currSum, el) => currSum + el, 0);
    return sum > 0;
  }

  orderNowHandler = () => this.setState({ orderNow: true });
  orderCancelHandler = () => this.setState({ orderNow: false });
  orderContinueHandler = () => this.props.history.push('/checkout');

  render() {
    const disabledInfo = { ...this.props.ings };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null,
        burger = this.state.error ? <p style={{textAlign: 'center'}}>Ingredients can't be loaded!</p> : <Spinner />;

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

    orderSummary = this.state.loading ? <Spinner /> : orderSummary;

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
    ings: state.ingredients,
    price: state.totalPrice,
  }
};

// REDUX ACTIONs & Dispatch Calls
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingredientName => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName }),
    onIngredientRemoved: ingredientName => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
