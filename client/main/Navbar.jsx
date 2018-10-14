import React from "react";
import "./css/Navbar.css"
import { Route, Link } from "react-router-dom";

const Navbar = () => (
  <div class="Navbar">
    <div class="container">
      <a>Home</a>
      <a>Analytics</a>
    </div>
  </div>
);

export default Navbar;