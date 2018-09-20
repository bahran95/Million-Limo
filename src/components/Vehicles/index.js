import React from "react";
import "./Vehicles.css";

const Vehicles = props => {
  return (
    <div className="car-wrapper row py-4 my-3">
      <div className="col-md-6">
        <p className="ml-2">
          {props.name}
          <hr />
          <span>{props.price}</span>
        </p>
        <img src={"../../images/Cadillac.jpg"} alt="" />
      </div>
      <div className="col-md-3" />
      <div className="col-md-3" />
    </div>
  );
};
export default Vehicles;
