import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import NavagationBar from "./nav-bar/nav-bar-base";
import Footer from "./footer";
import About from "./pages/about";
import Employers from "./pages/employers";
import Jobseekers from "./pages/job-seekers";
import Jobs from "./pages/jobs";
import Home from "./pages/home";
import Apply from "./pages/apply";
import Contact from "./pages/contact";
import NewJobManager from "./jobs/job-manager";
import LoginForm from "./login/login-form";
import MobileNav from "./nav-bar/mobileNav";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: true,
      error: "",
      loggedInStatus: "NOT_LOGGED_IN",
    };

    this.handleSetUser = this.handleSetUser.bind(this);
    this.handleSetError = this.handleSetError.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    if (Cookies.get("username")) {
      fetch(`http://127.0.0.1:5000/user/get/${Cookies.get("username")}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            user: data,
            loading: false,
            loggedInStatus: "LOGGED_IN",
          });
        })
        .catch((error) => {
          console.log("Error getting user data", error);
          this.setState({
            error: "An error occurred... Please try again later.",
          });
        });
    } else {
      this.setState({ loading: false });
    }
  }

  handleSetUser(userData) {
    this.setState({
      user: userData,
    });
  }

  handleSetError(errorData) {
    this.setState({ error: errorData });
  }
  handleLogOut() {
    Cookies.remove("username");
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavagationBar
              loggedInStatus={this.state.loggedInStatus}
              user={this.state.user}
              handleLogOut={this.handleLogOut}
            />
            <MobileNav />
            <Switch>
              <Route exact path="/about" render={(props) => <About />} />
              <Route
                exact
                path="/employers"
                render={(props) => <Employers />}
              />

              <Route
                exact
                path="/job-seekers"
                render={(props) => <Jobseekers />}
              />
              <Route exact path="/jobs" render={(props) => <Jobs />} />

              <Route
                exact
                path="/job-manager"
                render={(props) => <NewJobManager />}
              />

              <Route
                exact
                path="/contact"
                render={(props) => (
                  <Contact {...props} handleSetUser={this.handleSetUser} />
                )}
              />

              <Route
                exact
                path="/login-form"
                render={(props) => (
                  <LoginForm {...props} handleSetUser={this.handleSetUser} />
                )}
              />

              <div className="content-wrapper">
                <Home />
              </div>
            </Switch>
            <p>{this.state.error}</p>
          </div>
        </Router>
      </div>
    );
  }
}
