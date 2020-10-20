import React, { Component } from "react";
import "./MythicDungeonChecker.css";

class MythicDungeonChecker extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Flame +15 Checker</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Checking if the little flamies are doing their wittle 15s</h3>
        </div>
      </div>
    );
  }
}
export default MythicDungeonChecker;
