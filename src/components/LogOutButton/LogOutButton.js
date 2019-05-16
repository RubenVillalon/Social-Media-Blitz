import React, { Component } from "react";
import userLogOut from "../../store/actions/Logout";
import { connect } from 'react-redux';

import './LogOutButton.css'

class LogOutButton extends Component {

  userLogoutHandler = () => {
    this.props.dispatch(userLogOut());
  };

  render() {
    return (
      <div className='logout-container'>
        <button
          type="submit"
          onClick={this.userLogoutHandler}
          className="btn red lighten-1 z-depth-0"
        >
          Log Out
        </button>
      </div>
    );
  }
}

export default connect()(LogOutButton);
