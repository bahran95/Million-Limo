import React, { Component } from "react";
import QuoteForm from "../components/QuoteForm";
import VehicleSelect from "../components/VehicleSelect";
import PaymentDetails from "../components/PaymentDetails";
import "./Booking.css";

class Booking extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      date: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  bookNow(e) {
    e.preventDefault();
    console.log("click");
  }

  render() {
    return (
      <div>
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
          <QuoteForm handleChange={this.handleChange} bookNow={this.bookNow} />
          <VehicleSelect
            from={this.state.from}
            to={this.state.to}
            date={this.state.date}
          />
          <PaymentDetails />
        </div>
      </div>
    );
  }
}

export default Booking;
