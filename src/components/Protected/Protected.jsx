import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
export default class Protected extends Component {
  render() {
    let token = localStorage.getItem("token");
    try {
      const decoded = jwt_decode(token);

      console.log(decoded);
    } catch (error) {
      localStorage.clear();

      return <Redirect to="/login" />;
    }
    if (token) {
      if (this.props.path === "/home") {
        return (
          <Route path={this.props.path} component={this.props.component} />
        );
      } else if (this.props.state === "/movies") {
        return (
          <Route path={this.props.path} component={this.props.component} />
        );
      }
    } else {
      return <Redirect to="/login" />;
    }
  }
}
