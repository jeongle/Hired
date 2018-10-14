import React from "react";

const Job = (props) => {
  return(
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
  )
}

export default Job;