import React, { Component } from "react";

export default class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      company: "",
      description: "",

      editMode: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidUpdate() {
    if (Object.keys(this.props.jobToEdit).length > 0) {
      const { id, title, description, company } = this.props.jobToEdit;

      this.props.clearJobToEdit();
      this.setState({
        id: id,
        description: description || "",
        company: company || "",
        title: title || "",
        editMode: true,
      });
    }
  }

  handleSubmit() {
    if (this.state.editMode) {
      fetch(`http://127.0.0.1:5000/job/update/${this.state.id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title: this.state.title,
          company: this.state.company,
          description: this.state.description,
        }),
      });
      this.setState({
        editMode: false,
      });
    } else {
      fetch("http://127.0.0.1:5000/job/add", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title: this.state.title,
          company: this.state.company,
          description: this.state.description,
        }),
      });
    }
  }

  render() {
    return (
      <div className="job-form-wrapper">
        <form onSubmit={this.handleSubmit} className="job-form">
          <input
            type="text"
            name="title"
            placeholder="Title goes here"
            value={this.state.title}
            onChange={this.handleChange}
            className="job-form-input"
          />
          <input
            type="text"
            name="company"
            placeholder="Company goes here"
            value={this.state.company}
            onChange={this.handleChange}
            className="job-form-input"
          />
          <textarea
            type="text"
            name="description"
            placeholder="Description goes here"
            value={this.state.description}
            onChange={this.handleChange}
            className="job-form-input"
          />

          <div className="save-button-wrapper">
            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
