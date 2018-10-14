import React, { Component } from "react";
import Job from "./Job.jsx";

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
      <div class="Applications">
        <div class="todo">
          {this.state.todos.map(todo => (
            <Job todo={todo} key={todo.id} />
          ))}
        </div>
        <div class="inProg">
          {this.state.inProgs.map(todo => (
            <Job todo={todo} key={todo.id} />
          ))}
        </div>
        <div class="completed">
          {this.state.completeds.map(todo => (
            <Job todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Applications;