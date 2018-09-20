import React from "react";
import "./quoteForm.css";

const QuoteForm = ({ handleChange, bookNow }) => {
  return (
    <div className="container py-5 text-center">
      <div className="form-container py-4 mt-5 mb-4">
        <form>
          <div>
            <input
              name="from"
              placeholder="Pick Up Address"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="to"
              placeholder="Drop Off Address"
              onChange={handleChange}
            />
          </div>
          <div>
            <input name="date" placeholder="mm/dd/yy" onChange={handleChange} />
          </div>

          <button className="btn btn-danger px-4 py-2 my-3" onClick={bookNow}>
            Book Now
            <i class="fas fa-angle-right ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
