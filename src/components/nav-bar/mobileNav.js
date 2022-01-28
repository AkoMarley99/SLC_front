import React from "react";
import Collapsible from "react-collapsible";

import Home from "../pages/mobile-pages/home-m";
import About from "../pages/mobile-pages/about-m";
import Employers from "../pages/mobile-pages/employers-m";
import JobSeekers from "../pages/mobile-pages/job-seekers-m";
import Contact from "../pages/mobile-pages/contact-m";
import Footer from "../footer";
const App = () => {
  return (
    <div className="mobile-navbar">
      <div className="m-collaspible-wrapper">
        <Collapsible trigger="Home" className="m-collapsible">
          <Home />
        </Collapsible>
        <Collapsible trigger="About" className="m-collapsible">
          <About />
        </Collapsible>
        <Collapsible trigger="Employers" className="m-collapsible">
          <Employers />
        </Collapsible>
        <Collapsible trigger="Job Seekers" className="m-collapsible">
          <JobSeekers />
        </Collapsible>
        <Collapsible trigger="Contact Us" className="m-collapsible">
          <Contact />
        </Collapsible>
      </div>
      <Footer />
    </div>
  );
};

export default App;
