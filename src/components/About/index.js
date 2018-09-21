import React from "react";
import driver from "../../images/about-driver.png";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row mx-5">
          <div className="col-md-6 py-3">
            <h2>Easy Online Booking</h2>
            <p>No need to call, now we provide easy fast online booking. </p>
          </div>
          <div className="col-md-6 py-3">
            <h2>Professional Drivers</h2>
            <p>No need to call, now we provide easy fast online booking. </p>
          </div>
          <div className="col-md-6 py-3">
            <h2>Big Fleet of Vehicles</h2>
            <p>No need to call, now we provide easy fast online booking. </p>
          </div>
          <div className="col-md-6 py-3">
            <h2>Online Payment</h2>
            <p>No need to call, now we provide easy fast online booking. </p>
          </div>
        </div>
      </div>

      <div className="about-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-5">
              <h2>About</h2>
              <p>
                We at million limo pride ourselves with exellent ontime service.
                Customer satisfaction is our number one goal.
              </p>
            </div>
            <div className="col-md-6 text-right">
              <img src={driver} height={300} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
