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
      todos: [],
      inProgs: [],
      completeds: [],
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

  getAll() {
    axios.get('/applications')
      .then(res => {
        this.setState({
          todos: res.data.todos,
          inProgs: res.data.inProgs,
          completeds: res.data.completeds,
        })
      })
      .catch(err => {
        console.log(err);
      })
      console.log(this.state);
  }

  componentDidMount() {
    this.getAll();
  }

  renderApps() {
    this.setState({ showApps: true, showPlots: false });
  }

  renderPlots() {
    this.setState({ showApps: false, showPlots: true });
  }

  addApp(category, job) {
    // axios.post('/applications', {
    //   section: category,
    //   jobTitle: job.jobTitle,
    //   company: job.company,
    //   location: job.location,
    //   url: job.url,
    //   status: job.status,
    //   deadline: job.deadline
    // })
    // .then(() => this.getAll())
    // .catch(() => console.log('error posting'));
    this.setState({
      [`${category}`]: [...this.state[category], job],
    });
  }

  removeApp(category, index, i) {
    // axios.delete('/applications/' + index)
    //   .then(() => this.getAll())
    //   .catch(() => console.log('unsuccessful deletion'))
    let section = this.state[category][i]
    this.setState({
      [`${category}`]: section,
    })
  }

  progressApp(category, index, i) {
    let job = this.state[category][i];
    this.removeApp(category, i);
    if (category === 'todos') {
      this.addApp('inProgs', job);
    }
    if (category === 'inProgs') {
      this.addApp('completeds', job);
    }
    alert('Great job brother');
  }

  offerApp(status, index, i) {
    let job = this.state.completeds[i];
    job.status = status;
    this.forceUpdate();
    (status === 'offer') ? alert('You are a CS GOD') : alert('U suck');
  }

  render() {
    let applications, plots;
    applications = (this.state.showApps) ?
      <Applications 
        todos={this.state.todos}
        inProgs={this.state.inProgs}
        completeds={this.state.completeds} 
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