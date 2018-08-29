import React from "react";
import "./quoteForm.css";

const QuoteForm = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="form-container">
        <div className="form-heading pt-2">
          <h3>Get Quote</h3>
          <hr />
        </div>
        <form>
          <div>
            <input placeholder="Pick Up Address" />
          </div>
          <div>
            <input placeholder="Drop Off Address" />
          </div>
          <div>
            <input placeholder="08/29/18" />
          </div>

          <button className="btn btn-danger px-4 py-2 my-3">Reserve Now</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
