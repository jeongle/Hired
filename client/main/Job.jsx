import React from "react";
import "./css/Job.css";
const Job = (props) => {
  return (
    <div className="Job">
      <div className="title">
        <button onClick={() => props.removeApp(props.section, props.index)}>X</button>
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
  )
}

export default Job;