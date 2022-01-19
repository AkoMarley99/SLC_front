import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="unnamed">
      <form
        method="POST"
        action="http://127.0.0.1:5000/upload"
        enctype="multipart/form-data"
      >
        <div>
          <label for="inputFile">File Input</label>
          <input type="file" name="filename" />
        </div>
        <Link to="/ResumeSS">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
}
