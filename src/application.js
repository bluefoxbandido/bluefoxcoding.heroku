import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navigation/navbar";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Blog from "./pages/blog";
import AuthHelperMethods from "./auth/auth.helper.methods";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: false
    };
  };

  componentDidMount() {
      const auth = new AuthHelperMethods();
      const token = auth.getToken()
      if (token !== null) {
          this.setState({
              loggedInStatus: true
          })
      }
  }


  render() {
    return (
      <Router>
        <div className="app" id="app">
          <div className="navbar">
            <Navbar loggedInStatus={this.state.loggedInStatus} />
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} loggedIn={this.loggedIn} />
            <Route path="/logout" component={Logout}/>
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </Router>
    );
  }
}
