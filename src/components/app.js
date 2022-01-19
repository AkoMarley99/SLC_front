import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavagationBar from "./nav-bar/nav-bar-base";
import Footer from "./footer";
import About from "./pages/about";
import Employers from "./pages/empoloyers";
import Jobseekers from "./pages/job-seekers";
import Jobs from "./pages/jobs";
import Services from "./pages/services";
import Home from "./pages/home";
import Apply from "./pages/apply";
import ResumeSS from "./pages/ResumeSS";
import Login from "./login/login";
import Auth from "./login/auth";
export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavagationBar />

            <Switch>
              <Route path="/about" component={About} />
              <Route path="/employers" component={Employers} />
              <Route path="/job-seekers" component={Jobseekers} />
              <Route path="/jobs" component={Jobs} />
              <Route path="/services" component={Services} />
              <Route path="/apply" component={Apply} />
              <Route path="/ResumeSS" component={ResumeSS} />
              <Route path="/Login" component={Login} />

              <div className="content-wrapper">
                <Home />
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
