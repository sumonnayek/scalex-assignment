import React, { Component } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export class Main extends Component {
  render() {
    return (
      <div>
        {/* <Login /> */}
        <Dashboard />
      </div>
    );
  }
}

export default Main;
