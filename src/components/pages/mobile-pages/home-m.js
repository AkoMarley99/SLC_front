import React from "react";
import { NavLink } from "react-router-dom";

import Healthcare from "../../../../static/assets/images/healthcare.jpg";
import Technology from "../../../../static/assets/images/technology.jpg";
import Office from "../../../../static/assets/images/office.jpg";
import Teams from "../../../../static/assets/images/team.jpg";
import Teams2 from "../../../../static/assets/images/teams2.jpg";
export default function () {
  return (
    <div className="home-wrapper-m">
      <div className="building-teams-m">
        <div className="building-teams-title-m">
          Building Exceptional Teams
          <div className="building-teams-p-m">
            Exceptional teams start with employees who love what they do.
            Whether you’re looking for great employees or are ready for a new
            career, we are here for you.
          </div>
        </div>
        <img src={Teams} />
      </div>

      <div className="why-slc-m">
        <div className="why-slc-title-m">Why Stratigic Leadership Center</div>
        <div className="why-slc-p-m">
          We genuinely care and have a fresh, new perspective on how to build
          great careers and organizations. At TalentFill, we take the time to
          understand what you need and how we can help you thrive. We are:
          <div className="why-slc-list-m">
            <ul>
              <li> Advisors with a partner mindset</li>
              <li> Forward-thinking vs reactive</li>
              <li> Dedicated to growing people</li>
            </ul>
          </div>
        </div>

        <img src={Teams2} />
      </div>
      <div className="specialties-wrapper-m">
        <div className="our-specialties-m">
          Our Specialties
          <div className="specialties-m">
            <NavLink exact to="/employers-m" activeClassName="nav-link-active">
              <div className="specialties-box-m">
                <img
                  src={Healthcare}
                  alt="healthcare"
                  style={{ height: "300px" }}
                />
                <div className="specialties-text-m">Healthcare</div>
              </div>
            </NavLink>

            <NavLink exact to="/employers" activeClassName="nav-link-active-m">
              <div className="specialties-box-m">
                <img
                  src={Technology}
                  alt="technology"
                  style={{ height: "300px" }}
                />
                <div className="specialties-text-m">Technology</div>
              </div>
            </NavLink>

            <div className="specialties-box-m">
              <NavLink
                exact
                to="/employers-m"
                activeClassName="nav-link-active-m"
              >
                <img src={Office} alt="office" style={{ height: "300px" }} />
                <div className="specialties-text-m">
                  Office, Clerical & Administrative
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
