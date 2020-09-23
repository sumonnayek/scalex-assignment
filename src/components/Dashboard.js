import React, { Component } from "react";
import DashboardBody from "./DashboardBody";
import DashboardLeftNav from "./DashboardLeftNav";
import "./dashboard.scss";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <DashboardLeftNav />
        <DashboardBody />
      </div>
    );
  }
}

export default Dashboard;
