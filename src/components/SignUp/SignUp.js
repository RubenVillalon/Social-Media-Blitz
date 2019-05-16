import React, { Component } from "react";
import { connect } from "react-redux";
import { userSignUpAction } from '../../store/actions/userSignUpAction'

import "./SignUp.css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  firstNameHandler = event => {
    this.setState({
      firstName: event.currentTarget.value
    });
  };
  lastNameHandler = event => {
    this.setState({
      lastName: event.currentTarget.value
    });
  };
  emailHandler = event => {
    this.setState({
      email: event.currentTarget.value
    });
  };

  passwordHandler = event => {
    this.setState({
      password: event.currentTarget.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(userSignUpAction(this.state))
    .then ( data => {
      if (data) {
        this.props.history.push("/me");
      }
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="signup-form">
        <h1 className="grey-text text-darken-3">Sign Up</h1>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.firstNameHandler}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lastNameHandler}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.emailHandler}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordHandler}
          />
        </div>
        <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
      </form>
    );
  }
}

export default connect()(SignUp);
