import React, { Component } from "react";
import "./fleet.css";
import Lincoln from "../../images/Lincoln.jpg";
import Bmw from "../../images/BMW.jpg";
import Cadillac from "../../images/Cadillac.jpg";
import Mercedes from "../../images/Mercedes.jpg";

class Fleet extends Component {
  render() {
    const cars = [
      {
        name: "BMW Grand Sedan",
        price: "$120",
        img: Bmw,
        passangers: "3",
        bags: "2"
      },
      {
        name: "Cadillac Escalade",
        price: "$150",
        img: Cadillac,
        passangers: "6",
        bags: "4"
      },
      {
        name: "Lincoln MKT",
        price: "$140",
        img: Lincoln,
        passangers: "4",
        bags: "4"
      },
      {
        name: "Mercedes Sedan",
        price: "$90",
        img: Mercedes,
        passangers: "4",
        bags: "2"
      }
    ];

    const fleetList = cars.map((car, i) => {
      return (
        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src={cars[i].img} alt="" />
            <div className="card-body text-left">
              <h5 className="card-title">{cars[i].name}</h5>
              <p className="card-text">
                <li>
                  <i className="text-black-50 fas fa-male mr-3" />
                  {cars[i].passangers} Passangers
                </li>
                <li>
                  <i className="text-black-50 fas fa-suitcase mr-2" />2 Bags
                </li>
              </p>
              <a href="" className="btn btn-danger px-4">
                From {cars[i].price}
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="container text-center my-5">
          <h1>Our Fleet</h1>
          <hr />
          <div className="row">{fleetList}</div>
        </div>
        <div className="cta-bar py-5">
          <div className="container">
            <div className="text-center mx-5">
              <p>
                Car service with wide array of options to meet all your needs.
              </p>
              <button className="btn btn-danger px-4">
                View pricing<i class="fas fa-angle-right ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Fleet;
