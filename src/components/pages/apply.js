import React, { Component } from "react";
import axios from "axios";

import Footer from "../footer";

class App extends Component {
  state = {
    selectedFile: null,
    selectedJob: null,
    title: "",
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append(
      "selectedFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);

    axios.post("https://slc-api-ajm.herokuapp.com/pload", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="upload-heading-wrapper">
          <div className="upload-title-wrapper">
            <div className="upload-title">Upload Resume</div>
            <div className="pdf-required">*.pdf required</div>
          </div>

          <img src={Resume} alt="" style={{ height: "200px" }} />
        </div>

        <div>
          <input type="file" onChange={this.onFileChange} name="selectedFile" />
          <button onClick={this.onFileUpload}>Upload</button>
        </div>
        {this.fileData()}
        <Footer />
      </div>
    );
  }
}

export default App;
