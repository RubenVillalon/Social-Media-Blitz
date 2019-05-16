import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserDetails } from "../../store/actions/userDetailsAction";
import FollowButton from "../FollowButton/FollowButton";

import Post from "../../components/Post/Post";

class UserDetails extends Component {
  componentDidMount() {
    const userIdParams = this.props.match.params.userId;
    this.props.dispatch(getUserDetails(userIdParams));
  }

  renderUserDetails = () => {
    let userDetails;
    this.props.userDetails
      ? (userDetails = (
          <div key={this.props.userDetails._id}>
            <div className="img-container">
              <img className="img" src={this.props.userDetails.avatar} alt="" />
            </div>
            <div className="info-container">
              <p className="username">{this.props.userDetails.username}</p>
              <p className="content">{this.props.userDetails.email}</p>
              <p className="created">
                Member since: {this.props.userDetails.created_at}
              </p>
            </div>
            <FollowButton userId={this.props.match.params.userId} />
          </div>
        ))
      : (userDetails = " loading user details!");

    return userDetails;
  };

  renderUserDetailsPosts = () => {
    let PostsList;
    this.props.userDetails
      ? (PostsList = this.props.userDetails.blitzs.map(feed => {
          return <Post feed={feed} />;
        }))
      : (PostsList = "Loading Posts from user");

    return PostsList;
  };

  render() {
    console.log(this.props.userDetails);
    return (
      <div>
        <p>This is the user profile</p>
        {this.renderUserDetails()}
        {this.renderUserDetailsPosts()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.userDetailsReducer.userDetails);
  return {
    userDetails: state.userDetailsReducer.userDetails
  };
};

export default connect(mapStateToProps)(UserDetails);
