import React from 'react';
import Job from "./Job.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

const Todos = (props) => {
  return (
    <div className="todo">
      <div className="center">
        <span>TO APPLY </span>
        <button type="button" className="plusbutt" onClick={() => props.renderForm('todos')}>
          <FontAwesomeIcon icon="plus" />
        </button>
        {(!!props.todos) ? props.todos.map((todo, index) => (
          <Job
            job={todo}
            key={todo._id}
            i={index}
            section={'todos'}
            removeApp={props.removeApp}
            progressApp={props.progressApp} />
        )) : null}
      </div>
    </div>
  )
}

export default Todos;