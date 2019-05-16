import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./NavigationBar.css";
import LogOutButton from "../LogOutButton/LogOutButton";

class NavigationBar extends Component {
  render() {
    return this.props.token ? (
      <nav className="nav-wrapper purple darken-2">
        <div className="navigation-container">
          <a href="/" className="blitz-logo">
            Blitz
          </a>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/feed">Feed</NavLink>
            </li>
            <li>
              <NavLink to="/me">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <LogOutButton />
            </li>
          </ul>
        </div>
      </nav>
    ) : (
      <nav className="nav-wrapper purple darken-2">
        <div className="navigation-container">
          <a href="/" className="blitz-logo">
            Blitz
          </a>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authorizationReducer.token
  };
};

export default connect(mapStateToProps)(NavigationBar);
