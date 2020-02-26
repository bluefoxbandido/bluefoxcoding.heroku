import React, { Component } from "react";
import AuthHelperMethods from "../auth/auth.helper.methods";

export default class Logout extends Component {
  Auth = new AuthHelperMethods();

  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: false
    };

    this.Auth.logout();
    this.props.history.replace("/login");
  }

  render() {
    return <div className="">You have logged out.</div>;
  }
}
