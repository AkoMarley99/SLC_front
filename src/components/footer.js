import React from "react";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FooterLogo from "../../static/assets/images/SLC_logo.png";
export default function () {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo-wrapper">
        <img src={FooterLogo} alt="" style={{ height: "200px" }} />
      </div>
      <div className="footer-contact-wrapper">
        <div className="address">6855 52nd PL Mission, KS, 66202</div>
        <div className="phone-number">+1 801-690-3922</div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-link-wrapper">
          <NavLink exact to="/" activeClassName="footer-link-active">
            Home
          </NavLink>
        </div>

        <div className="footer-link-wrapper">
          <NavLink exact to="/about" activeClassName="footer-link-active">
            About
          </NavLink>
        </div>

        <div className="footer-link-wrapper">
          <NavLink exact to="/employers" activeClassName="footer-link-active">
            Employers
          </NavLink>
        </div>

        <div className="footer-link-wrapper">
          <NavLink exact to="/job-seekers" activeClassName="footer-link-active">
            Job Seekers
          </NavLink>
        </div>

        <div className="footer-link-wrapper">
          <NavLink exact to="/contact" activeClassName="footer-link-active">
            Contact
          </NavLink>
        </div>
      </div>

      <div class="copyright-wrapper">
        &copy; 2022 Strategic Leadership Ceneter &#124; All rights reserved
      </div>
    </div>
  );
}
