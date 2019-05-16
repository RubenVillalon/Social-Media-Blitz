import React, { Component } from "react";
import { connect } from "react-redux";
import { userLoginAction } from "../../store/actions/index";

import "./Login.css";

class Login extends Component {
  state = {
    email: "fake2@email.com",
    password: "password"
  };

  handleChangeEmail = event => {
    this.setState({
      email: event.currentTarget.value
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.currentTarget.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.dispatch(userLoginAction(this.state))
    .then(data => {
      if (data) {
        this.props.history.push("/feed");
      }
    });
  };

  render() {
    return (
      <div className="main-container-login">
        <form onSubmit={this.submitHandler}>
        <h1 className="grey-text text-darken-3">Sign In</h1>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>

          <button type="submit" className="btn blue lighten-1 z-depth-0">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
