import React, { Component } from "react";
import MapContainer from "../MapContainer";
import "./TripDetails.css";

class TripDetails extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row trip-detail-wrapper">
          <div className="col-md-6 py-5 pl-5">
            <h2>Trip Details</h2>
            <hr className="color-hr" />
            <div className="col-md-12 pt-3">
              <div className="form-group">
                <lable>From</lable>
                <br />
                <input className="long-input" />
              </div>
              <div className="form-group">
                <lable>To</lable>
                <br />
                <input className="long-input" />
              </div>
              <div className="form-group">
                <lable>Email</lable>
                <br />
                <input className="long-input" />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6">
                <div className="form-group">
                  <lable>Number of Passagers</lable>
                  <br />
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
            <button className="btn btn-danger my-4">
              Select Vehicle <i class="fas fa-angle-right ml-2" />
            </button>
          </div>
          <div className="col-md-6 pr-0">
            <MapContainer
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TripDetails;
