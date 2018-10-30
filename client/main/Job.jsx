import React from "react";
import "./css/Job.css";
const Job = (props) => {
  const prog = (props.section !== 'completeds') ?
    <button 
      className="prog"
      onClick={() => props.progressApp(props.section, props.job._id, props.i)}>
      &#9994;
    </button> :
    null;

  const offer = (props.section === 'completeds') ?
    <div>
      <button
        className="offer"
        onClick={() => props.offerApp('offer', props.job._id, props.i)} >
        Offer? &#9732;
      </button>
      <button
        className="rejection"
        onClick={() => props.offerApp('rejection', props.job._id, props.i)} >
        Rejection? &#9760;
      </button>
    </div> :
    null

  return (
    <div className="Job">
      <div className="title">
        <div>{props.job.jobTitle}</div>
        <button 
          className="delete"
          onClick={() => props.removeApp(props.section, props.job._id, props.i)}>
          X
        </button>
      </div>
      <div className="company">
        Company: {props.job.company}
      </div>
      <div className="location">
        Location: {props.job.location}
      </div>
      <div className="url">
        <a target="_blank" href={`https://www.${props.job.url}` }>Link</a>
        {prog}
        {offer}
      </div>
    </div>
  )
}

export default Job;