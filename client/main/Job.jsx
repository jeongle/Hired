import React from "react";
import "./css/Job.css";
const Job = (props) => {
  const prog = (props.section !== 'completeds') ?
    <button 
      className="prog"
      onClick={() => props.progressApp(props.section, props.index)}>
      &#9994;
    </button> :
    null;

  const offer = (props.section === 'completeds') ?
    <div>
      <button
        className="offer"
        onClick={() => props.offerApp('offer', props.index)} >
        Offer? &#9732;
      </button>
      <button
        className="rejection"
        onClick={() => props.offerApp('rejection', props.index)} >
        Rejection? &#9760;
      </button>
    </div> :
    null

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
        {prog}
        {offer}
      </div>
    </div>
  )
}

export default Job;