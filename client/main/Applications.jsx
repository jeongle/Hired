import React, { Component } from "react";
import Todos from "./Todos.jsx";
import InProgs from "./InProgs.jsx";
import Completeds from "./Completeds.jsx";
import NewJobModal from "./NewJobModal.jsx";
import "./css/Applications.css";


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
      <NewJobModal 
        submitJob={() => this.submitJob(this.category)} 
        editJob={this.editJob}/> :
      null;

    return (
      <div>
        {Modal}
        <div className="Applications">
          <Todos 
            renderForm={this.renderForm}
            todos={this.props.todos}
            removeApp={this.props.removeApp}
            progressApp={this.props.progressApp}
          />
          <InProgs 
            renderForm={this.renderForm}
            inProgs={this.props.inProgs}
            removeApp={this.props.removeApp}
            progressApp={this.props.progressApp}
          />
          <Completeds
            renderForm={this.renderForm}
            completeds={this.props.completeds}
            removeApp={this.props.removeApp}
            progressApp={this.props.progressApp}
          />
        </div>
      </div>
    )
  }
}

export default Applications;