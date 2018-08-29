import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <QuoteForm />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
