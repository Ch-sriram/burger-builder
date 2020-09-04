// LIBRARY IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// CUSTOM COMPONENT IMPORTS
import Input from "../../components/UI/Input/Input.component";
import { StyledButton as Button } from "../../components/UI/Buttons/StyledButton.styled";
import { FormDiv } from "../../components/UI/Form/FormDiv.styled";
import Spinner from "../../components/UI/Spinner/Spinner.component";
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
    isSignUp: true,
  };

  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirectPath !== "/")
      this.props.onSetAuthRedirectPath();
  }

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
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
  };

  switchAuthModeHandler = () => this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls)
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    
    const form = !this.props.loading ?
      formElementsArray.map(formElement => (
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
      )) : <Spinner />;
    
    const errorMessage = this.props.error ? <p style={{'color':'red', 'font-weight': '600'}}>Invalid E-Mail or Password</p> : null;
    const authRedirect = this.props.isAuth ? <Redirect to={this.props.authRedirectPath} /> : null; 

    return (
      <FormDiv>
        <form onSubmit={this.submitHandler}>
          {authRedirect}  
          {errorMessage}
          <h3>{this.state.isSignUp ? "Signup" : "Login"}</h3>
          {form}
          <Button type="success">SUBMIT</Button>
        </form>
        <Button
          type="danger"
          onClick={this.switchAuthModeHandler}
          style={{'textDecoration':'underline'}}>
          {this.state.isSignUp ? "Existing User: Login" : "New User: Signup"}
        </Button>
      </FormDiv>
    );
  }
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuth: state.auth.token !== null,
  buildingBurger: state.burgerBuilder.building,
  authRedirectPath: state.auth.authRedirectPath,
});

const mapDispatchToProps = dispatch => ({
  onAuth: (email, pass, isSignup) => dispatch(actions.auth(email, pass, isSignup)),
  onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
