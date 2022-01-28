import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import Logo from "../../../static/assets/images/SLC_logo.png";

export default function NavBar(props) {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="nav-wrapper">
      <div className="logo-wrapper">
        <NavLink exact to="/" activeClassName="nav-link-active">
          <img src={Logo} alt="placeholder" style={{ height: "250px" }} />
        </NavLink>
      </div>
      <div className="links-wrapper">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/about" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/employers" activeClassName="nav-link-active">
            Employers
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/job-seekers" activeClassName="nav-link-active">
            Job Seekers
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/contact" activeClassName="nav-link-active">
            Contact Us
          </NavLink>
        </div>
        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/job-manager", "Job Manager")
          : null}
      </div>

      <div className="login-wrapper">
        <NavLink exact to="/login-form" activeClassName="nav-link-active">
          <button className="loginout-buttons">Sign in</button>
        </NavLink>
        <button className="loginout-buttons" onClick={props.handleLogOut}>
          Sign out
        </button>
      </div>
    </div>
  );
}
