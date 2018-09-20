import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="container">
      <div className="nav-header d-flex align-items-center justify-content-end">
        <NavLink to="/booking">
          <button className="btn btn-danger px-4 py-2">
            {" "}
            Online Booking
            <i class="fas fa-angle-right ml-2" />
          </button>
        </NavLink>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fleet">
                Our Fleet
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" href="#">
                Service Rates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" href="#">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" href="#">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
