import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="">
        <div className="resume_submmited">Resume sucessfully submited</div>
        <Link to="/jobs">
          <button type="submit">Back to jobs </button>
        </Link>
      </div>
    );
  }
}
