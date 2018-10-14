import React from "react";
import "./css/Navbar.css"
import { Route, Link } from "react-router-dom";

const Navbar = () => (
  <div class="Navbar">
    <div class="container">
      <button type="button">Home</button>
      <button type="button">Analytics</button>
    </div>
  </div>
);

export default Navbar;