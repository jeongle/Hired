import React from "react";

const Job = (props) => {
  return(
    <div>
      <div className="title">
        {this.props.jobTitle}
      </div>
      <div className="company">
        {this.props.company}
      </div>
      <div className="location">
        {this.props.location}
      </div>
      <div className="url">
        {this.props.url}
      </div>
    </div>
  )
}

export default Job;