// LIBRARY IMPORTS
import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import axios from '../../../axios-orders';

// CUSTOM COMPONENTS
import { StyledButton as Button } from '../../../components/UI/Buttons/StyledButton.styled';
import Spinner from '../../../components/UI/Spinner/Spinner.component';

// STYLED COMPONENTS
const FormDiv = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #CCC;
  border: 1px solid #EEE;
  padding: 10px;
  box-sizing: border-box;
  
  & form {
    display: flex; 
    flex-flow: column; 
    align-items: center;

    input:not(:last-of-type) {
      margin-bottom: 7px;
    }

    input {
      width: 50%;
      text-align: center; 
      font: inherit;
    }
  }
  
  @media (min-width: 600px) { width: 500px; }
`;

class ContactData extends Component {
  // we'll add this info dynamically after we know about 
  // handling forms in react
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHandler = event => {
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
  }

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your E-Mail" />
        <input type="text" name="street" placeholder="Street Address" />
        <input type="text" name="postal" placeholder="Postal Code" />
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
