import React from "react";
import Collapsible from "react-collapsible";

import Footer from "../footer";
import Healthcaremp from "../../../static/assets/images/healthcareemp.jpg";
import Techemp from "../../../static/assets/images/techemp.jpg";
import Officeemp from "../../../static/assets/images/officeemp.jpg";
const App = () => {
  return (
    <div className="employers-wrapper">
      <div className="collaspible-wrapper">
        <Collapsible trigger="Healthcare" className="collapsible">
          <p className="collapsible-p">
            Behind every great patient experience is a highly-qualified,
            dedicated, and caring healthcare team. We help build exceptional,
            patient-focused teams.
          </p>
          <p className="collapsible-p">
            You need a partner who understands the unique hiring challenges and
            opportunities in the healthcare industry. We not only search for
            candidates with the critical skills and experience, but makes sure
            they have what it takes to deliver a great patient experience.
          </p>
          <img src={Healthcaremp} alt="" style={{ height: "300px" }} />
        </Collapsible>
        <Collapsible trigger="Technology" className="collapsible">
          <p className="collapsible-p">
            Does it feel like you are always searching for top tech talent in a
            tight tight market?
            <br />
            We can help you find candidates with the right skills and cultural
            fit for your company.
          </p>
          <p className="collapsible-p">
            We focus on the critical skills needed for a position and have a
            unique screening process that zeros in on qualified professionals
            that are an excellent match for the job and company culture.
            <br />
            The result? Our clients and their new employees thrive. It’s that
            simple.
          </p>
          <img src={Techemp} alt="" style={{ height: "300px" }} />
        </Collapsible>
        <Collapsible
          trigger="Office, Clerical & Administration"
          className="collapsible"
        >
          <p className="collapsible-p">
            Are you looking for the right person for an office, clerical or
            administrative position? We can help.
          </p>
          <p className="collapsible-p">
            They are the heart of an organization and keep it running
            efficiently by managing processes, handling tasks, meeting
            deadlines, and often supporting both customers and coworkers. Your
            company wouldn’t be the same without them.
          </p>
          <img src={Officeemp} alt="" style={{ height: "300px" }} />
        </Collapsible>
      </div>
      <Footer />
    </div>
  );
};

export default App;
