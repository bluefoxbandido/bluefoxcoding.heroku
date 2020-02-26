import React, { Component } from "react";
import AuthHelperMethods from "./auth.helper.methods";

const withAuth = AuthComponent => {
  const Auth = new AuthHelperMethods();

  return class AuthWrapped extends Component {
    state = {
      confirm: null,
      loaded: false
    };

    componentDidMount() {
      !Auth.loggedIn()
        ? this.props.history.replace("/login")
        : this.setState({
            confirm: Auth.getConfirm()
          });
    }

    render() {
      return this.state.loaded === true && this.state.confirm ? (
        <AuthComponent
          history={this.props.history}
          confirm={this.state.confirm}
        />
      ) : null;
    }
  }; //End Return
};

export default withAuth;
