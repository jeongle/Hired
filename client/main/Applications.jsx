import React, { Component } from "react";
import Job from "./Job.jsx";
import "./css/Applications.css";

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
            <span>TO APPLY</span>
            {this.state.todos.map(todo => (
              <Job todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
        <div className="inProg">
          <div className="center">
            <span>IN PROGRESS</span>
            {this.state.inProgs.map(todo => (
              <Job todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
        <div className="completed">
          <div className="center">
            <span>COMPLETED</span>
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