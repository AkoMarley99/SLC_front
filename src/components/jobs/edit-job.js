import React from "react";

const JobSideBarList = (props) => {
  const jobList = props.data.map((jobs) => {
    return (
      <div key={jobs.id} className="job-sidebar">
        <div className="job-list-sidebar">
          <div className="job-list-title">{jobs.title}</div>

          <div className="actions">
            <a
              className="action-icon"
              onClick={() => props.handleEditClick(jobs)}
            >
              <button className="jobs-button">Edit</button>
            </a>

            <a
              className="action-icon"
              onClick={() => props.handleDeleteClick(jobs)}
            >
              <button className="jobs-button">Delete</button>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="job-sidebar-list-wrapper">{jobList}</div>;
};

export default JobSideBarList;
