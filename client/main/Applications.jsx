import React, { Component } from "react";
import Job from "./Job.jsx";
import NewJobModal from "./NewJobModal.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./css/Applications.css";

library.add(faPlus);

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.applications[0],
      inProgs: props.applications[1],
      completeds: props.applications[2],
      showForm: false,
    }
    this.newJob = {};
    this.editJob = this.editJob.bind(this);
    this.submitJob = this.submitJob.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {
    this.setState({ showForm: true });
  }

  closeForm() {
    this.setState({ showForm: false });
  }

  editJob(e) {
    this.newJob[e.target.name] = e.target.value;
  }

  submitJob(category) {
    return (event) => {
      event.preventDefault();
      this.closeForm();
      console.log(category);
      console.log(this.newJob);
    }
  }

  render() {
    let Modal;
    Modal = (this.state.showForm) ?
      <NewJobModal submitJob={this.submitJob} editJob={this.editJob}/> :
      null;

    return (
      <div>
        {Modal}
        <div className="Applications">
          <div className="todo">
            <div className="center">
              <span>TO APPLY </span>
              <button type="button" className="plusbutt" onClick={this.renderForm}>
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
              <button type="button" className="plusbutt" onClick={this.renderForm}>
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
              <button type="button" className="plusbutt" onClick={this.renderForm}>
                <FontAwesomeIcon icon="plus" />
              </button>
              {this.state.completeds.map(todo => (
                <Job todo={todo} key={todo.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Applications;