import React from "react";
import Vehicles from "../Vehicles";
import "./VehicleSelect.css";

const VehicleSelect = () => {
  return (
    <div className="row my-5">
      <div className="col-md-4 mx-5 pt-3">
        <h2>Select Vehicle</h2>
        <hr className="color-hr" />
        <Vehicles />
        <Vehicles />
        <Vehicles />
      </div>
      <div className="trip-detail-wrapper col-md-6 pt-3 pb-5 px-4">
        <h2>Trip Details</h2>
        <hr className="color-hr" />
        <p>From: </p>
        <hr />
        <p>To: </p>
        <hr />
        <p>Distance </p>
        <hr />

        <div className="row ">
          <div className="col-md-6">
            <div className="form-group">
              <lable>Number of Passagers</lable>
              <input placeholder="1" />
            </div>
            <div className="form-group">
              <lable>First Name</lable>
              <br />
              <input />
            </div>
            <div className="form-group">
              <lable>Email</lable>
              <br />
              <input />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <lable>Number of Bags</lable>
              <input placeholder="1" />
            </div>
            <div className="form-group">
              <lable>Last Name</lable>
              <br />
              <input />
            </div>
            <div className="form-group">
              <lable>Phone Number</lable>
              <input />
            </div>
          </div>
        </div>
        <button className="btn btn-danger mt-3">Confirm & Pay</button>
      </div>
    </div>
  );
};

export default VehicleSelect;
