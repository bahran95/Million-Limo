import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Booking from "./Booking";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/booking" component={Booking} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
