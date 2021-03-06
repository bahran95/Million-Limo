import React from "react";
import "./PaymentDetails.css";

const PaymentDetails = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="trip-detail-wrapper my-5 pt-4 pb-5 px-4">
          <h2>Trip Details</h2>
          <hr className="color-hr" />
          <div className="row">
            <div className="col-md-6">
              <p>From: </p>
              <hr />
              <p>To: </p>
              <hr />
              <p>Vehicle: </p>
              <hr />
            </div>
            <div className="col-md-6">
              <p>Date: </p>
              <hr />
              <p>Distance: </p>
              <hr />
              <p>Pickup Time: </p>
              <hr />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h2>Passenagers Details</h2>
              <hr className="color-hr" />
              <div className="passenager-info d-flex justify-content-between">
                <div>
                  <p>Passenagers: 1</p>
                  <p>Bags: 1</p>
                </div>
                <div>
                  <p>Name: John Doe</p>
                  <p>Email: JohnDoe@gmail.com</p>
                  <p>Phone: 555-555-5555</p>
                </div>
              </div>
              <div className="passenager-info mt-2">
                <p>Additional Information:</p>
              </div>
              <div className="passenager-info-red mt-2">
                <p>Total Price: $240</p>
                <div>
                  <input type="radio" id="paypal" name="payment" checked />
                  <label className="pl-2" htmlFor="paypal">
                    Pay with Paypal
                  </label>
                </div>

                <div>
                  <input type="radio" id="cash" name="payment" />
                  <label className="pl-2" htmlFor="cash">
                    Pay with Cash
                  </label>
                </div>
                <button className="btn btn-danger mt-4 px-4 py-2">
                  Proceed To Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
