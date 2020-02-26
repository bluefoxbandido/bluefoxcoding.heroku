import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navigation/navbar";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Login from "./pages/login";
import Blog from "./pages/blog";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: true
    };
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
            <Route path="/login" component={Login} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </Router>
    );
  }
}
