import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import Logo from "../../../static/assets/images/SLC_logo.png";

export default function () {
  return (
    <div className="nav-wrapper">
      <div className="logo-wrapper">
        <img src={Logo} alt="placeholder" style={{ height: "250px" }} />
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
          <NavLink exact to="/services" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>
      </div>

      <div className="login-button-wrapper">
        <NavLink exact to="/login" activeClassName="nav-link-active">
          Login
        </NavLink>
      </div>
    </div>
  );
}
