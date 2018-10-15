import React, { Component } from "react";
import Job from "./Job.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./css/Applications.css";

library.add(faPlus);

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.applications.todo,
      inProgs: props.applications.inProg,
      completeds: props.applications.completed,
    }
  }
  render() {
    return (
      <div className="Applications">
        <div className="todo">
          <div className="center">
            <span>TO APPLY </span>
            <button type="button" className="plusbutt">
              <FontAwesomeIcon icon="plus" />
            </button>
            {this.state.todos.map(todo => (
              <Job todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
        <div className="inProg">
          <div className="center">
            <span>IN PROGRESS </span>
            <button type="button" className="plusbutt">
              <FontAwesomeIcon icon="plus" />
            </button>
            {this.state.inProgs.map(todo => (
              <Job todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
        <div className="completed">
          <div className="center">
            <span>COMPLETED </span>
            <button type="button" className="plusbutt">
              <FontAwesomeIcon icon="plus" />
            </button>
            {this.state.completeds.map(todo => (
              <Job todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Applications;