import React, { Component } from "react";
import { connect } from "react-redux";

import { getFeed } from "../../store/actions/feedActions";

import Post from "../Post/Post";

import "./Feed.css";

import NewBlitz from "../NewBlitz/NewBlitz";

class Feed extends Component {
  componentDidMount() {
    this.props.dispatch(getFeed());
  }

  renderFeed = () => {
    let feed;
    this.props.feed
      ? (feed = this.props.feed.reverse().map(feed => {
          return (
            <div key={feed._id}>
              <Post feed={feed} />
            </div>
          );
        }))
      : (feed = "Loading feed");
    return feed;
  };

  render() {
    return (
      <div className="feed-main-container">
        <NewBlitz />
        {this.renderFeed()}
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    feed: state.feedReducer.feed
  };
};
export default connect(mapStateToProp)(Feed);
