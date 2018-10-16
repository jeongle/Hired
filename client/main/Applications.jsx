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
      showForm: false,
    }
    this.category;
    this.newJob = {};
    this.editJob = this.editJob.bind(this);
    this.submitJob = this.submitJob.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm(category) {
    this.category = category;
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
      this.props.addApp(category, this.newJob)
      this.closeForm();
      this.newJob = {};
    }
  }

  render() {
    let Modal;
    Modal = (this.state.showForm) ?
      <NewJobModal submitJob={() => this.submitJob(this.category)} editJob={this.editJob}/> :
      null;

    return (
      <div>
        {Modal}
        <div className="Applications">
          <div className="todo">
            <div className="center">
              <span>TO APPLY </span>
              <button type="button" className="plusbutt" onClick={() => this.renderForm('todos')}>
                <FontAwesomeIcon icon="plus" />
              </button>
              {this.props.applications[0].map((todo, index) => (
                <Job todo={todo} key={index} index={index} section={'todos'} removeApp={this.props.removeApp} />
              ))}
            </div>
          </div>
          <div className="inProg">
            <div className="center">
              <span>IN PROGRESS </span>
              <button type="button" className="plusbutt" onClick={() => this.renderForm('inProgs')}>
                <FontAwesomeIcon icon="plus" />
              </button>
              {this.props.applications[1].map((todo, index) => (
                <Job todo={todo} key={index} index={index} section={'inProgs'} removeApp={this.props.removeApp} />
              ))}
            </div>
          </div>
          <div className="completed">
            <div className="center">
              <span>COMPLETED </span>
              <button type="button" className="plusbutt" onClick={() => this.renderForm('completeds')}>
                <FontAwesomeIcon icon="plus" />
              </button>
              {this.props.applications[2].map((todo, index) => (
                <Job todo={todo} key={index} index={index} section={'completeds'} removeApp={this.props.removeApp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Applications;