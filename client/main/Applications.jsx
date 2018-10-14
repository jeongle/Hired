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
          {this.state.todos.map(todo => (
            <Job todo={todo} key={todo.id} />
          ))}
        </div>
        <div className="inProg">
          {this.state.inProgs.map(todo => (
            <Job todo={todo} key={todo.id} />
          ))}
        </div>
        <div className="completed">
          {this.state.completeds.map(todo => (
            <Job todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Applications;