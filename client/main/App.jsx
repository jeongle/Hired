import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Applications from "./Applications.jsx";
import Plots from "./Plots.jsx";
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        apps: {
          todo: [
            {
              jobTitle: "engineer",
              company: "bro to do ",
              location: "San Brocisco, CA",
              url: "brobro.com",
              id: 1,
            },
            {
              jobTitle: "engineer2",
              company: "bro to do 2",
              location: "San Brocisco, CA",
              url: "brobro.com",
              id: 2,
            }
          ],
          inProg: [
            {
              jobTitle: "engineer",
              company: "bro in prog",
              location: "San Brocisco, CA",
              url: "brobro.com",
              id: 3,
            }
          ],
          completed: [
            {
              jobTitle: "engineer",
              company: "bro completed",
              location: "San Brocisco, CA",
              url: "brobro.com",
              id: 4,
            }
          ],
        }
      },
      showApps: true,
      showPlots: false,
    }
    this.renderApps = this.renderApps.bind(this);
    this.renderPlots = this.renderPlots.bind(this);
    this.addApp = this.addApp.bind(this);
  }

  renderApps() {
    this.setState({showApps: true, showPlots: false});
  }

  renderPlots() {
    this.setState({showApps: false, showPlots: true});
  }

  addApp(category, job) {
    this.setState(userData.apps[category].push(job));
  }

  render() {
    let applications, plots;
    applications = (this.state.showApps) ? 
      <Applications applications={this.state.userData.apps} addApp={this.addApp}/> : 
      null;
    plots = (this.state.showPlots) ? 
      <Plots applications={this.state.userData.apps}/> : 
      null;
    return (
      <div>
        <Navbar renderApps={this.renderApps} renderPlots={this.renderPlots}/>
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