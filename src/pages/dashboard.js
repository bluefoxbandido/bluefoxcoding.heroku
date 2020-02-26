import React, { Component } from "react";
import withAuth from "../auth/with.auth";
import AuthHelperMethods from '../auth/auth.helper.methods';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectItems: [],
      projectToEdit: {}
    };
  }

  componenentDidMount() {
    const Auth = new AuthHelperMethods();
    if (Auth.getToken() !== null) {
      this.setState({
        loggedIn: true
      });
    }
    console.log(this.state.loggedInStatus);
  }

  render() {
    return <div className="">Dashboard</div>;
  }
}

export default withAuth(Dashboard);
