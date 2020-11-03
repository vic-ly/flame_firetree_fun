import React, { Component } from "react";
import DashCarousel from "../../components/DashCarousel/DashCarousel";

class Dashboard extends Component {
  state = {
    access_token: null,
  };

  render() {
    return <DashCarousel />;
  }
}
export default Dashboard;
