// LIBRARY IMPORTS
import React, { Component } from 'react';
import styled from 'styled-components';

// CUSTOM COMPONENTS
import { StyledButton as Button } from '../../../components/UI/Buttons/StyledButton.styled';

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
    }
  }

  render() {
    return (
      <FormDiv>
        <h3>Enter Your Contact Details</h3>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your E-Mail" />
          <input type="text" name="street" placeholder="Street Address" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button type="success">ORDER</Button>
        </form>
      </FormDiv>
    );
  }
}

export default ContactData;
