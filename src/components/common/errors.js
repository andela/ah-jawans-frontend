/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Error extends Component {
  render() {
    if (typeof (this.props.errors) === 'object') {
      return <div className="alert alert-danger displayError">
      <span>{this.props.errors.username }</span>
      <br/>
      <span>{this.props.errors.email }</span>
      <br/>
      <span>{this.props.errors.password }</span>
    </div>;
    }
    return (
      <div className="alert alert-danger displayError">
        {this.props.errors }
      </div>
    );
  }
}

export default Error;
