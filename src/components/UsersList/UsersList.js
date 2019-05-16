import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions/userActions";
import UserProfile from "../UserProfile/UserProfile";

import "./UserList.css";

class UsersList extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  renderUsers = () => {
    let users;
    this.props.users
      ? (users = this.props.users.map(user => {
          return <UserProfile user={user} />;
        }))
      : (users = "Loading users ...");
    return users;
  };

  render() {
    return (
      <div className='userlist-main-body'>
        <div className="userlist-container">{this.renderUsers()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("in the maptoprops", state.userReducer.feed);
  return {
    users: state.userReducer.users
  };
};

export default connect(mapStateToProps)(UsersList);
