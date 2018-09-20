import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Fleet from "../components/Fleet";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
        <Fleet />
        <About />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
