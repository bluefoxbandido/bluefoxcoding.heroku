import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationComponent from "./navigation/navbar";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: false
    };
  }

  render() {
    return (
      <Router>
        <div className="app" id="app">
          <div className="navbar">
            <NavigationComponent loggedInStatus={this.state.loggedInStatus} />
          </div>
        </div>
      </Router>
    );
  }
}
