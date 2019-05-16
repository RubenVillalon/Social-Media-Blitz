import React, { Component } from "react";
import { connect } from "react-redux";
import { likePost } from "../../store/actions/likePostActions";
import { withRouter } from "react-router";
import { getFeed } from "../../store/actions/feedActions";

import "./LikeButton.css";

class LikeButton extends Component {
  handleLikeButton = () => {
    const postId = this.props.postId;
    const action = likePost(postId);
    this.props.dispatch(action).then(() => this.props.dispatch(getFeed()));
  };

  render() {
    return (
      <div>
        <div className="like-container">
          {this.props.status ? (
            <button
              className="btn-floating red accent-3 lighten-1 waves-effect waves-light"
              type="submit"
              onClick={this.handleLikeButton}
            >
              <i className="material-icons right white-text">favorite</i>
            </button>
          ) : (
            <button
              className="btn-floating purple lighten-3 waves-effect waves-light"
              type="submit"
              onClick={this.handleLikeButton}
            >
              <i className="material-icons right">favorite_border</i>
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let status = undefined;
  if (state.feedReducer.feed) {
    const postFiltered = state.feedReducer.feed.filter(post => {
      console.log(post._id, props.postId);
      return post._id === props.postId;
    });

    if (postFiltered.length > 0) {
      status = postFiltered[0].isLiked;
    } else {
      status = undefined;
    }
  }
  return {
    status
  };
};

export default connect(mapStateToProps)(withRouter(LikeButton));
