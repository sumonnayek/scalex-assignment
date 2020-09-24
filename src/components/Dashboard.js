import React, { Component } from "react";
import DashboardBody from "./DashboardBody";
import DashboardLeftNav from "./DashboardLeftNav";
import "./dashboard.scss";
import ToggleButton from "./ToggleButton";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNavOpen: false,
    };
  }
  toggleChange = () => {
    const { leftNavOpen } = this.state;
    this.setState({
      leftNavOpen: leftNavOpen ? false : true,
    });
  };
  render() {
    const {
      toggleChange,
      state: { leftNavOpen },
    } = this;
    return (
      <div className="dashboard-container">
        <ToggleButton toggleChange={toggleChange} leftNavOpen={leftNavOpen} />
        <DashboardLeftNav leftNavOpen={leftNavOpen} />
        <DashboardBody />
      </div>
    );
  }
}

export default Dashboard;
