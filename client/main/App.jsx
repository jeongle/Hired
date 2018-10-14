import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
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
              id: 2,
            }
          ],
          completed: [
            {
              jobTitle: "engineer",
              company: "bro completed",
              location: "San Brocisco, CA",
              url: "brobro.com",
              id: 3,
            }
          ],
        }
      },
      showApps: true,
      showPlots: false,
    }
  }
  render() {
    let applications, plots;
    applications = (this.state.showApps) ? <Applications applications={this.state.userData.apps} /> : null;
    plots = (this.state.showPlots) ? <Plots /> : null;
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          {applications}
          {plots}
        </div>
      </div>
    );
  }
}

export default App;