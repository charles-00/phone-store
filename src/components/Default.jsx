import React, { Component } from "react";

class Default extends Component {
  state = {};
  render() {
    return (
      <div className="container text-title mt-5 text-center text-capitalize">
        <h1>404</h1>
        <h1>error</h1>
        <h2>page not found</h2>
        <h3>
          the requested url{" "}
          <span className="text-danger">
            {this.props.location.pathname} &nbsp;
          </span>
          was not found
        </h3>
      </div>
    );
  }
}

export default Default;
