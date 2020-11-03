import React, { Component } from "react";
import DashCarousel from "../../components/DashCarousel/DashCarousel";

class Dashboard extends Component {
  state = {
    access_token: null,
  };

  render() {
    console.log("mtest");
    console.log(this.props.token);
    return <DashCarousel />;
  }
}
export default Dashboard;
