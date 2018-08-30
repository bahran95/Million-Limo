import React, { Component } from "react";
import MapContainer from "../MapContainer";
import QuoteForm from "../QuoteForm";

class TripDetails extends Component {
  render() {
    return (
      <div className="row mb-5">
        <div className="col-md-5">
          <QuoteForm />
        </div>
        <div className="col-md-7">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default TripDetails;
