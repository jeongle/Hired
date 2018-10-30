import React from 'react';
import Job from "./Job.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

const Completeds = (props) => {
  return (
    <div className="completed">
      <div className="center">
        <span>COMPLETED </span>
        <button type="button" className="plusbutt" onClick={() => props.renderForm('completeds')}>
          <FontAwesomeIcon icon="plus" />
        </button>
        {(!!props.completeds) ? props.completeds.map((complete, index) => (
          <Job
            job={complete}
            key={complete._id}
            i={index}
            section={'completeds'}
            removeApp={props.removeApp}
            offerApp={props.offerApp} />
        )) : null}
      </div>
    </div>
  )
}

export default Completeds;