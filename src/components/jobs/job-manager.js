import React, { Component } from "react";
import axios from "axios";

import JobsList from "./edit-job";
import JobForm from "./job-form";
import Footer from "../footer";
export default class extends Component {
  constructor(props) {
    super();

    this.state = { jobs: [], jobToEdit: {} };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearJobToEdit = this.clearJobToEdit.bind(this);
  }
  getjobs() {
    axios
      .get("http://127.0.0.1:5000/job/get")
      .then((response) => {
        this.setState({
          jobs: response.data,
        });
      })
      .catch((error) => {
        console.log("error in getjobs", error);
      });
  }

  componentDidMount() {
    this.getjobs();
  }

  handleEditClick(data) {
    this.setState({
      jobToEdit: data,
    });
  }
  clearJobToEdit() {
    this.setState({
      jobToEdit: {},
    });
  }
  handleDeleteClick(data) {
    axios
      .delete(`http://127.0.0.1:5000/job/delete/${data.id}`, {})
      .then((response) => {
        this.setState({
          data: this.state.data.filter((item) => {
            return item.id !== response.id;
          }),
        });

        return response.data;
      })
      .catch((error) => {
        console.log("handleDeleteClick error", error);
      });
  }

  render() {
    return (
      <div className="job-manager-component">
        <div className="job-manager-wrapper">
          <div className="job-manager-left">
            <div className="job-form-title">New job goes here</div>
            <JobForm
              jobToEdit={this.state.jobToEdit}
              clearJobToEdit={this.clearJobToEdit}
            />
          </div>

          <div className="job-manager-right">
            <div className="job-list-title">Current Jobs</div>
            <JobsList
              handleDeleteClick={this.handleDeleteClick}
              data={this.state.jobs}
              handleEditClick={this.handleEditClick}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
