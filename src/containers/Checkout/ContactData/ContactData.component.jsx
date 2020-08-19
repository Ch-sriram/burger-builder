// LIBRARY IMPORTS
import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

// CUSTOM COMPONENTS
import { StyledButton as Button } from '../../../components/UI/Buttons/StyledButton.styled';
import Spinner from '../../../components/UI/Spinner/Spinner.component';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input.component';

// STYLED COMPONENTS
const FormDiv = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #CCC;
  border: 1px solid #EEE;
  padding: 10px;
  box-sizing: border-box;
  
  @media (min-width: 600px) { width: 500px; }
`;

/**
 * In React, we don't have any built-in validation construct, 
 * in react, we can use a 3rd party application, or apply 
 * the concepts of validation on our own.
 * 
 * Whenever we change the value inside the respective input
 * field, we'll also have to check whether the input is valid
 * or not.
 */

class ContactData extends Component {
  // Each field in the form is to be given a configuration
  // wrt to its respective HTML Element (Tag) Type, and then,
  // the Element's attributes as elementConfig
  state = {
    orderForm: {
      name: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: { required: true, },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: { required: true, },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 6
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: { required: true, },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "email",
          placeholder: "Your E-Mail",
        },
        value: "",
        validation: { required: true, },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: "select", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "fast", displayValue: "Fast" },
            { value: "standard", displayValue: "Standard" },
          ],
        },
        value: "fastest",
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
    loading: false,
  };

  orderHandler = event => {
    event.preventDefault(); // prevents GET request
    console.log(this.props.ingredients);

    this.setState({ loading: true }, () => {
      const formData = {};
      for (let formElementIdentifier in this.state.orderForm)
        formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;

      console.log(formData);

      const order = {
        ingredients: this.props.ingredients,
        price: this.props.totalPrice,
        orderData: formData,
      };

      axios
        .post("/orders.json", order)
        .then(response => {
          this.setState({ loading: false }, () => {
            this.props.history.push("/");
            console.log(response);
            return response;
          });
        })
        .catch(error => {
          this.setState({ loading: false }, () => {
            console.log(error);
            return error;
          });
        });
    });
  };

  // RIGHT WAY FOR VALIDATION USING INTERPOLATION
  checkValidity = (value, rules) => {
    let isValid = true; if (!rules) return true;
    isValid = rules.required ? value.trim() !== "" && isValid : isValid;
    isValid = rules.minLength ? value.length >= rules.minLength && isValid : isValid;
    isValid = rules.maxLength ? value.length <= rules.maxLength && isValid : isValid;
    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const orderForm = { ...this.state.orderForm }; // deep copy of orderForm => shallow copy of its nested objects
    const formElementCopy = { ...orderForm[inputIdentifier] }; // deep copy of the first nested object
    formElementCopy.value = event.target.value;
    formElementCopy.valid = this.checkValidity(formElementCopy.value, formElementCopy.validation);
    formElementCopy.touched = true;
    orderForm[inputIdentifier] = formElementCopy;
    
    let formIsValid = true;
    for (let inputID in orderForm) {
      // using interpolation
      // formIsValid = orderForm[inputID].valid && formIsValid;

      // using conditional checking
      if (!orderForm[inputID].valid) {
        formIsValid = false;
        break;
      }
    }
    
    this.setState({ orderForm, formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm)
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button type="success" disabled={!this.state.formIsValid}>ORDER</Button>
      </form>
    );

    form = this.state.loading ? <Spinner /> : form;

    return (
      <FormDiv>
        <h3>Enter Your Contact Details</h3>
        {form}
      </FormDiv>
    );
  }
}

export default withRouter(ContactData);
