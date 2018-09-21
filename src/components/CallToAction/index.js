import React from "react";
import { Link } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-wrapper py-5">
      <div className="text-center">
        <h1 className="py-4">
          Book Online Today And Travel in Comfort <br /> On Your Next Trip
        </h1>
        <p className="py-2">
          Reach Us at 800-111-2222 or through Email booking@millionlimo.com{" "}
        </p>
        <Link to="/booking">
          <button className="btn btn-danger px-4 mb-4">
            Online Booking<i class="fas fa-angle-right ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CallToAction;
