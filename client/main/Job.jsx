import React from "react";
import "./css/Job.css";
const Job = (props) => {
  return (
    <div className="container">
      <div className="Job">
        <div className="title">
          {props.todo.jobTitle}
        </div>
        <div className="company">
          {props.todo.company}
        </div>
        <div className="location">
          {props.todo.location}
        </div>
        <div className="url">
          {props.todo.url}
        </div>
      </div>
    </div>
  )
}

export default Job;