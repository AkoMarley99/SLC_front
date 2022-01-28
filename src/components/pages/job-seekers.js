import React from "react";

import Footer from "../footer";
import Interview from "../../../static/assets/images/interview.jpg";
import SingleJob from "./single_job";
export default function () {
  return (
    <div className="job-seekers-wrapper">
      <div className="job-seekers-heading">
        <div className="job-seekers-p">
          Whether you are looking to change careers, find a new job, or find a
          temporary position to make some extra money, we can help.
        </div>
        <img src={Interview} alt="" style={{ height: "200px" }} />
      </div>

      <div className="job-postings">
        <div className="jobs-title">Available positions</div>
      </div>
      <div className="jobs-wrapper">
        <SingleJob />
      </div>

      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}
