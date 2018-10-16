import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Applications from "./Applications.jsx";
import Plots from "./Plots.jsx";
import axios from 'axios';
import "./css/App.css";
import dummyData from './dummydata.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: dummyData.todos,
      inProgs: dummyData.inProgs,
      completeds: dummyData.completeds,
      showApps: true,
      showPlots: false,
    },
    this.renderApps = this.renderApps.bind(this);
    this.renderPlots = this.renderPlots.bind(this);
    this.addApp = this.addApp.bind(this);
    this.removeApp = this.removeApp.bind(this);
    this.progressApp = this.progressApp.bind(this);
    this.offerApp = this.offerApp.bind(this);
  }

  renderApps() {
    this.setState({ showApps: true, showPlots: false });
  }

  renderPlots() {
    this.setState({ showApps: false, showPlots: true });
  }

  addApp(category, job) {
    this.setState({
      [`${category}`]: [...this.state[category], job],
    });
  }

  removeApp(category, index) {
    const section = this.state[category].filter((value, i) => {
      return (i !== index);
    });
    console.log(section);
    this.setState({
      [`${category}`]: section,
    })
  }

  progressApp(category, index) {
    let job = this.state[category][index];
    this.removeApp(category, index);
    if (category === 'todos') {
      this.addApp('inProgs', job);
    }
    if (category === 'inProgs') {
      this.addApp('completeds', job);
    }
    alert('Great job brother');
  }

  offerApp(status, index) {
    let job = this.state.completeds[index];
    job.status = status;
    this.forceUpdate();
    (status === 'offer') ? alert('You are a CS GOD') : alert('U suck');
  }

  render() {
    let applications, plots;
    applications = (this.state.showApps) ?
      <Applications 
        applications={[this.state.todos, this.state.inProgs, this.state.completeds]} 
        addApp={this.addApp} 
        removeApp={this.removeApp}
        progressApp={this.progressApp}
        offerApp={this.offerApp}/> :
      null;
    plots = (this.state.showPlots) ?
      <Plots 
        applications={[this.state.todos, this.state.inProgs, this.state.completeds]} /> :
      null;
      
    return (
      <div>
        <Navbar renderApps={this.renderApps} renderPlots={this.renderPlots} />
        <div className="content">
          <Header />
          <div className="App-body">
            {applications}
            {plots}
          </div>
        </div>
      </div>
    );
  }
}

export default App;