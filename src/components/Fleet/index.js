import React, { Component } from "react";
import "./fleet.css";
import Lincoln from "../../images/Lincoln.jpg";

class Fleet extends Component {
  render() {
    return (
      <div>
        <div className="container text-center my-5">
          <h1>Our Fleet</h1>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top" src={Lincoln} alt="" />
                <div className="card-body text-left">
                  <h5 className="card-title">BMW Grand Sedan</h5>
                  <p className="card-text">
                    <li>4 Passangers</li>
                    <li>2 Bags</li>
                  </p>
                  <a href="" className="btn btn-danger">
                    From $110
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top" src={Lincoln} alt="" />
                <div className="card-body text-left">
                  <h5 className="card-title">BMW Grand Sedan</h5>
                  <p className="card-text">
                    <li>4 Passangers</li>
                    <li>2 Bags</li>
                  </p>
                  <a href="" className="btn btn-danger">
                    From $110
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top" src={Lincoln} alt="" />
                <div className="card-body text-left">
                  <h5 className="card-title">BMW Grand Sedan</h5>
                  <p className="card-text">
                    <li>4 Passangers</li>
                    <li>2 Bags</li>
                  </p>
                  <a href="" className="btn btn-danger">
                    From $110
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top" src={Lincoln} alt="" />
                <div className="card-body text-left">
                  <h5 className="card-title">BMW Grand Sedan</h5>
                  <p className="card-text">
                    <li>4 Passangers</li>
                    <li>2 Bags</li>
                  </p>
                  <a href="" className="btn btn-danger">
                    From $110
                  </a>
                </div>
              </div>
            </div>
          </div>
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
