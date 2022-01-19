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
    fetch("http://127.0.0.1:5000/job/get")
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
      <div className="App">
        <h1>Jobs</h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            Title: {item.title}, Company Name: {item.company}, Description:{" "}
            {item.description}
            <Link to="/apply">
              <button>Apply</button>
            </Link>
          </ol>
        ))}
      </div>
    );
  }
}

export default SingleJob;
