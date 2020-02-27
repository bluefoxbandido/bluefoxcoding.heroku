import React from "react";

import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

const Nav = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <NavLink
        to={route}
        className="nav-link"
        activeClassName={"nav-link-active"}
      >
        {linkText}
      </NavLink>
    );
  };

  return (
    <Navbar expand="lg" className="nav-links">
      <div className="left-side">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="nav-link-active"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          className="nav-link"
          activeClassName="nav-link-active"
        >
          About
        </NavLink>
        {props.loggedInStatus === true
          ? dynamicLink("/dashboard", "Dashboard")
          : null}
        <Dropdown as={ButtonGroup}>
          <Button variant="blog">
            <NavLink
              to="/blog"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              Blog
            </NavLink>
          </Button>

          <Dropdown.Toggle split variant="blog" id="dropdown-split-basic" />

          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item>
              <NavLink to="/languages" className="nav-link">
                Languages
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/frameworks" className="nav-link">
                Frameworks
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/libraries" className="nav-link">
                Libraries
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="right-side">
        {props.loggedInStatus === true
          ? dynamicLink("/logout", "Log Out")
          : dynamicLink("/login", "Login")}
      </div>
      <div className="logo-wrapper">
        <Navbar.Brand href="/">
          <div className="logo">
            <span className="bluefox" style={{ color: "blue" }}>
              bluefox
            </span>
            <span className="coding" style={{ color: "red" }}>
              coding
            </span>
          </div>
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default withRouter(Nav);
