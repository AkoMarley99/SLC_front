import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../footer";

import Healthcare from "../../../static/assets/images/healthcare.jpg";
import Technology from "../../../static/assets/images/technology.jpg";
import Office from "../../../static/assets/images/office.jpg";
import Teams from "../../../static/assets/images/team.jpg";
import Teams2 from "../../../static/assets/images/teams2.jpg";
export default function () {
  return (
    <div className="home-wrapper">
      <div className="building-teams">
        <div className="building-teams-title">
          Building Exceptional Teams
          <div className="building-teams-p">
            Exceptional teams start with employees who love what they do.
            Whether you’re looking for great employees or are ready for a new
            career, we are here for you.
          </div>
        </div>
        <img src={Teams} />
      </div>

      <div className="why-slc">
        <img src={Teams2} />
        <div className="why-slc-title">
          Why Stratigic Leadership Center
          <div className="why-slc-p">
            We genuinely care and have a fresh, new perspective on how to build
            great careers and organizations. At TalentFill, we take the time to
            understand what you need and how we can help you thrive. We are:
            <div className="why-slc-list">
              <ul>
                <li> Advisors with a partner mindset</li>
                <li> Forward-thinking vs reactive</li>
                <li> Dedicated to growing people</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="specialties-wrapper">
        <div className="our-specialties">
          Our Specialties
          <div className="specialties">
            <NavLink exact to="/employers" activeClassName="nav-link-active">
              <div className="specialties-box">
                <img
                  src={Healthcare}
                  alt="healthcare"
                  style={{ height: "300px" }}
                />
                <div className="specialties-text">Healthcare</div>
              </div>
            </NavLink>

            <NavLink exact to="/employers" activeClassName="nav-link-active">
              <div className="specialties-box">
                <img
                  src={Technology}
                  alt="technology"
                  style={{ height: "300px" }}
                />
                <div className="specialties-text">Technology</div>
              </div>
            </NavLink>

            <div className="specialties-box">
              <NavLink exact to="/employers" activeClassName="nav-link-active">
                <img src={Office} alt="office" style={{ height: "300px" }} />
                <div className="specialties-text">
                  Office, Clerical & Administrative
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
