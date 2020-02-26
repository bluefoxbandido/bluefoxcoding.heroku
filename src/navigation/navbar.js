import React from "react";

import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const Navbar = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="left-side">
        <NavLink to={route} activeClassName={"nav-link-active"}>
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <NavLink exact to="/" activeClassName="nav-link-active">
          Home
        </NavLink>
      </div>

      <div className="left-side">
        <NavLink exact to="/about" activeClassName="nav-link-active">
          About
        </NavLink>
      </div>
      {props.loggedInStatus === true
        ? dynamicLink("/dashboard", "Dashboard")
        : null}
      <div className="left-side">
        <Dropdown as={ButtonGroup}>
          <Button variant="blog">
            <NavLink to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          </Button>

          <Dropdown.Toggle split variant="blog" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink to="/languages">
                Languages
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/frameworks">
                Frameworks
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/libraries">
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
    </div>
  );
};

export default withRouter(Navbar);
