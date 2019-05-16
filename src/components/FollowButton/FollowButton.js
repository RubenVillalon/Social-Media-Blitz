import React, { Component } from "react";
import { connect } from 'react-redux'
import { followUser } from '../../store/actions/followUserActions'
import { getUserDetails } from "../../store/actions/userDetailsAction"
import { withRouter } from 'react-router';

class FollowButton extends Component {

    handleFollowButton = () => {
        const userIdParams = this.props.match.params.userId;
        const action = followUser(userIdParams)
        this.props.dispatch(action).then(() => this.props.dispatch(getUserDetails(userIdParams)));
    }


  render() {
    return (
      <div>
        <div className="follow-container">
        <button
            className="btn blue lighten-1 waves-effect waves-light"
            type="submit"
            onClick={this.handleFollowButton}
          >
          {
            this.props.followStatus ? "Unfollow" : "Follow"
          }
            <i class="material-icons right">send</i>
            </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        followStatus: state.userDetailsReducer.userDetails.isFollowed
    }
}


export default connect(mapStateToProps)(withRouter(FollowButton))