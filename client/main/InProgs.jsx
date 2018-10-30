import React from 'react';
import Job from "./Job.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

const InProgs = (props) => {
  return (
    <div className="inProg">
      <div className="center">
        <span>IN PROGRESS </span>
        <button type="button" className="plusbutt" onClick={() => renderForm('inProgs')}>
          <FontAwesomeIcon icon="plus" />
        </button>
        {(!!props.inProgs) ? props.inProgs.map((inProg, index) => (
          <Job
            job={inProg}
            key={inProg._id}
            i={index}
            section={'inProgs'}
            removeApp={props.removeApp}
            progressApp={props.progressApp} />
        )) : null}
      </div>
    </div>
  )
}

export default InProgs;