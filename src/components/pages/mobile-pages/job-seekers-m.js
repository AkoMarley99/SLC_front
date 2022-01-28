import React from "react";

import Interview from "../../../../static/assets/images/interview.jpg";
import SingleJob from ".././single_job";
export default function () {
  return (
    <div className="job-seekers-wrapper-m">
      <div className="job-seekers-heading-m">
        <div className="job-seekers-p-m">
          Whether you are looking to change careers, find a new job, or find a
          temporary position to make some extra money, we can help.
        </div>
        <img src={Interview} alt="" style={{ height: "200px" }} />
      </div>

      <div className="job-postings-m">
        <div className="jobs-title-m">Available positions</div>
      </div>
      <div className="jobs-wrapper-m">
        <SingleJob />
      </div>
    </div>
  );
}
