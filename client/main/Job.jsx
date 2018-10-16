import React from "react";
import "./css/Job.css";
const Job = (props) => {
  return (
    <div className="Job">
      <div className="title">
        <div>{props.todo.jobTitle}</div>
        <button 
          className="delete"
          onClick={() => props.removeApp(props.section, props.index)}>
          X
        </button>
      </div>
      <div className="company">
        Company: {props.todo.company}
      </div>
      <div className="location">
        Location: {props.todo.location}
      </div>
      <div className="url">
        <a target="_blank" href={`https://www.${props.todo.url}` }>Link</a>
      </div>
    </div>
  )
}

export default Job;