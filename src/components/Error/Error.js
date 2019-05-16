import React, { Component } from "react";
import errorLogo from './../assets/404.png';
import '../CSS/Error.css'

class Error extends Component {
  render() {
    return (
      <div className='container'>
        <img className='errorLogo' src={errorLogo}></img>
        <h2 class='indigo lighten-3 white-text'> This Page Doesn't Exist</h2>
      </div>
    );
  }
}

export default Error;
