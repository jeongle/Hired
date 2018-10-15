import React from "react";
import "./css/Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";

library.add(faFileSignature);
library.add(faChartArea);

const Navbar = (props) => (
  <div className="Navbar">
    <div className="container">
      <div className="button-contents">
        <button type="button" onClick={props.renderApps}>
          <FontAwesomeIcon icon="file-signature" />
        </button>
        <hr></hr>
      </div>
      <div className="button-contents">
        <button type="button" onClick={props.renderPlots}>
          <FontAwesomeIcon icon="chart-area" />
        </button>
        <hr></hr>
      </div>
    </div>
  </div>
);

export default Navbar;