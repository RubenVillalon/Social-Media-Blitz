import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="welcome-container">
        <div className="buttons-container">
          <NavLink to="/login">
            <button className="btn purple darken-5 waves-effect waves-light">
              <i class="material-icons right">home</i>Login
            </button>
          </NavLink>
          <p>_______________________________________________________</p>
          <NavLink to="/signup">
            <button className="btn purple darken-5 waves-effect waves-light">
              <i class="material-icons right">assignment_ind</i>Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
