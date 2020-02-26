import React, { Component } from "react";
import AuthHelperMethods from "../auth/auth.helper.methods";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: false,
      email: "",
      password: ""
    };
  }

  Auth = new AuthHelperMethods();

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        console.log(res);
        if (res === false) {
          return alert("Sorry, those credentials do not match.");
        }

        this.props.history.go("/login");
      })
      .catch(err => {
        alert(err);
      });
  };

  loggedIn = () => {
    if (this.Auth.loggedIn()) {
      console.log("Logged In");
      this.props.history.replace("/dashboard");
    }
  };

  componentDidMount() {
    if (this.Auth.loggedIn()) this.props.history.replace("/dashboard");
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="box">
          <div className="box-header">
            <h1>Login</h1>
          </div>
          <form className="box-form">
            <input
              className="form-item"
              placeholder="email"
              name="email"
              type="text"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <button className="form-submit" onClick={this.handleFormSubmit}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
