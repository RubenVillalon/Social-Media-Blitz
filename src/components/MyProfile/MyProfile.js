import React, { Component } from "react";
import { connect } from "react-redux";
import { getMyProfile } from "../../store/actions/myProfileActions";

import "./MyProfile.css";

class MyProfile extends Component {
  componentDidMount() {
    this.props.dispatch(getMyProfile());
  }

  renderMyProfile = () => {
    console.log("in the render", this.props.myInfo);
    let myProfile;
    this.props.myInfo
      ? (myProfile = (
          <div className="myinfo-container" key={this.props.myInfo._id}>
            <div className="myinfo-img-container">
              <img
                className="myinfo-img"
                src={this.props.myInfo.avatar}
                alt=""
              />
            </div>
            <div className="myinfo-info-container">
              <p className="myinfo-username">{this.props.myInfo.username}</p>
              <p className="myinfo-email">{this.props.myInfo.email}</p>
              <p className="myinfo-created">
                Member since: {this.props.myInfo.created_at}
              </p>
            </div>
          </div>
        ))
      : (myProfile = "Loading feed");
    return myProfile;
  };

  render() {
    return (
      <div className="myinfo-main-container">{this.renderMyProfile()}</div>
    );
  }
}

const mapStateToProps = state => {
  console.log("my profile state:", state.myProfileReducer.myInfo);
  return {
    myInfo: state.myProfileReducer.myInfo
  };
};

export default connect(mapStateToProps)(MyProfile);
