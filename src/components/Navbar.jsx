import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link ml-4">
                products <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <button className="btn btn-outline-warning">
              <i className="fa fa-cart-plus fa-2x text-white"></i>
              &nbsp;
              <span className="d-inline-block">My cart</span>
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
