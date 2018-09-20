import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 mr-5">
            <h3>About Us</h3>
            <hr className="color-hr" />
            <p>
              Pellentesque feugiat feugiat ipsum, nec sollicitudin tortor
              convallis et. In venenatis, turpis eu condimentum ultrices, dui
              erat elementum ante, vitae finibus nisi libero a justo. Mauris ex
              ante, imperdiet et elementum id, mollis.
            </p>
            <p>
              Quis felis. Praesent aliquet porttitor sem, at pretium erat
              tristique at. Proin molestie eros et ipsum pretium efficitur.
              Curabitur ligula sem, auctor at malesuada non, lobortis ornare
              dolor. Ut vitae ante non lectus fermentum
            </p>
          </div>
          <div className="col-md-5">
            <h3>Contact Details</h3>
            <hr className="color-hr" />
            <p>
              <i className="fas fa-map-marker-alt mr-3" />Scottsdale, AZ 85071
            </p>
            <p>
              <i className="fas fa-phone mr-3" />
              1-800-859-3489<br />
              <span className="text-muted ml-4">Mon-Fri, 9am-6pm</span>
            </p>
            <p>
              <i class="fas fa-envelope mr-3" />
              booking@millionlimo.com<br />
              <span className="text-muted ml-4">We reply within 24hrs</span>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center py-3">
        Copyright 2018 Million Limo. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
