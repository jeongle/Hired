import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Applications from "./Applications.jsx";
import Plots from "./Plots.jsx";
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      showApps: true,
      showPlots: false,
    }
  }
  render() {
    let applications, plots;
    applications = (this.state.showApps) ? <Applications/> : null;
    plots = (this.state.showPlots) ? <Plots/> : null;
    return (
      <div class="App">
        <Navbar/>
        <div class="content">
          {applications}
          {plots}
        </div>
      </div>
    );
  }
}

export default App;