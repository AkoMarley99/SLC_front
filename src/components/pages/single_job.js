import React from "react";
import { Link } from "react-router-dom";

class SingleJob extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };

    this.handleApply = this.handleApply.bind(this);
  }

  handleApply(event) {
    <Redirect to="/apply" />;
    console.log("hi");
  }

  componentDidMount() {
    fetch("https://slc-api-ajm.herokuapp.com/job/get")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="single-job-posting-wrapper">
        {items.map((item) => (
          <ol key={item.id}>
            <div className="job-post-title">Title: {item.title}</div>

            <div className="job-description">
              Description: {item.description}
            </div>

            {/* <Link to="/apply">
              <button className="apply-button">Apply</button>
            </Link> */}
          </ol>
        ))}
      </div>
    );
  }
}

export default SingleJob;
