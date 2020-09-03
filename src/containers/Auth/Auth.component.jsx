// LIBRARY IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CUSTOM COMPONENT IMPORTS
import Input from "../../components/UI/Input/Input.component";
import { StyledButton as Button } from "../../components/UI/Buttons/StyledButton.styled";
import { FormDiv } from "../../components/UI/Form/FormDiv.styled";
import * as actions from "../../store/actions/index";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "email",
          placeholder: "E-Mail Address",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input", // type of the HTML tag used
        elementConfig: {
          // attributes for this element
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };

  checkValidity = (value, rules) => {
    let isValid = true; if (!rules) return true;
    isValid = rules.required ? value.trim() !== "" && isValid : isValid;
    isValid = rules.minLength ? value.length >= rules.minLength && isValid : isValid;
    isValid = rules.maxLength ? value.length <= rules.maxLength && isValid : isValid;
    return isValid;
  };

  inputChangedHandler = (event, controlName) => {
    const controls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true,
      }
    };
    this.setState({ controls });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls)
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    
    const form = formElementsArray.map(formElement => (
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
    ));
    
    return (
      <FormDiv>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button type="success">SUBMIT</Button>
        </form>
      </FormDiv>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  onAuth: (email, pass) => dispatch(actions.auth(email, pass)),
});

export default connect(null, mapDispatchToProps)(Auth);
