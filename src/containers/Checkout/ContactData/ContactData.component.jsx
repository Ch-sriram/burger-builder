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
      },
      street: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      zipCode: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
      },
      country: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "text",
          placeholder: "Country",
        },
        value: "",
      },
      email: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "email",
          placeholder: "Your E-Mail",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "fast", displayValue: "Fast" },
            { value: "standard", displayValue: "Standard" },
          ]
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault(); // prevents the default action of a form, which is requesting the data from a server using the GET method.
    console.log(this.props.ingredients);
    this.setState({ loading: true }, () => {
      const order = {
        ingredients: this.props.ingredients,
        price: this.props.totalPrice,
        customer: {
          name: "Ch. Sriram",
          address: {
            street: "Crazy Street",
            zipCode: "51251",
            country: "Zambia",
          },
          email: "test@crazy.com",
          deliveryMethod: "fastest",
        },
      };

      axios
        .post("/orders.json", order)
        .then((response) => {
          this.setState({ loading: false }, () => {
            this.props.history.push("/");
            console.log(response);
            return response;
          });
        })
        .catch((error) => {
          this.setState({ loading: false }, () => {
            console.log(error);
            return error;
          });
        });
    });
  };

  render() {
    let form = (
      <form>
        <Input
          elementType="input"
          elementConfig="..."
          value="..."
        />
        <Input
          input_type="input"
          type="email"
          name="email"
          placeholder="Your E-Mail"
        />
        <Input
          input_type="input"
          type="text"
          name="street"
          placeholder="Street Address"
        />
        <Input
          input_type="input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button type="success" onClick={this.orderHandler}>
          ORDER
        </Button>
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
