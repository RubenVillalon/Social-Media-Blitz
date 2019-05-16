import React, { Component } from "react";
import { addBlitz, getFeed } from "../../store/actions/feedActions";
import { connect } from "react-redux";

import "./NewBlitz.css";

class NewBlitz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  handleNewBlitz = event => {
    this.setState({
      content: event.currentTarget.value
    });
  };

  submitBlitzHandler = e => {
    e.preventDefault();
    if (this.state.content) {
      const action = addBlitz(this.state);
      this.props.dispatch(action).then(() => this.props.dispatch(getFeed()));
      this.setState({
        content: ""
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitBlitzHandler} className="form">
          <div className="input-field">
            <label htmlFor="blitz">Blitz your mind!</label>
            <input
              type="text"
              value={this.state.content}
              onChange={this.handleNewBlitz}
            />
          </div>
          <button
            className="btn purple lighten-1 waves-effect waves-light"
            type="submit"
            onClick={this.submitBlitzHandler}
          >
            Blitz!
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewBlitz);
