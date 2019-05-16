import React, { Component } from "react";

import LikeButton from '../../components/LikeButton/LikeButton'
import './Post.css'

class Post extends Component {
  render() {
    return (
      this.props.feed.content ? 
      <div className="post-container" key={this.props.feed._id}>
        <div className="post-img-container">
          <img className="post-img" src={this.props.feed._user.avatar} alt="post" />
        </div>
        <div className="post-info-container">
          <p className="post-username">{this.props.feed._user.username}</p>
          <p className="post-content">{this.props.feed.content}</p>
          <p className="post-created">Posted on: {this.props.feed.created_at}</p>
        </div>
        <LikeButton postId={this.props.feed._id} />
      </div>: null
    )
  }
}

export default Post;
