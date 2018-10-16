import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Applications from "./Applications.jsx";
import Plots from "./Plots.jsx";
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

    this.setState({
      [`${category}`]: section,
    })
  }

  render() {
    let applications, plots;
    applications = (this.state.showApps) ?
      <Applications 
        applications={[this.state.todos, this.state.inProgs, this.state.completeds]} 
        addApp={this.addApp} 
        removeApp={this.removeApp}/> :
      null;
    plots = (this.state.showPlots) ?
      <Plots /> :
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