import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";
import TripDetails from "../components/TripDetails";
import VehicleSelect from "../components/VehicleSelect";
import PaymentDetails from "../components/PaymentDetails";
import "./Booking.css";

class Booking extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container text-center py-5">
          <h1>Booking</h1>
        </div>
        <div className="container">
          <ul className="steps d-flex justify-content-between">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <ul className="steps-detail d-flex justify-content-between">
            <li className="text-center">Trip Details</li>
            <li>Select Vehicle</li>
            <li>Enter Payment Details</li>
            <li>Confirmation</li>
          </ul>
          <PaymentDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Booking;
