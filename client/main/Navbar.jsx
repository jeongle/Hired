import React from "react";
import Applications from "./Applications.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">Analytics</Link>
      <Route exact path="/" component={Applications} />
    </div>
  </Router>
);

export default Navbar;