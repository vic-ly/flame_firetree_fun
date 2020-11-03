import React, { Component } from "react";
import "./MythicDungeonChecker.css";
import Cookies from "js-cookie";
import MythicTable from "../../components/MythicTable/MythicTable";

class MythicDungeonChecker extends Component {
  state = {
    roster_data: {},
    roster_fetch: false,
  };

  get_roster = async () => {
    await fetch(
      "https://us.api.blizzard.com/data/wow/guild/firetree/flame/roster?namespace=profile-us&locale=en_US&access_token=" +
        this.props.token
    )
      .catch((e) => console.log(e))
      .then((response) => response.json())
      .then((res) => {
        this.setState({ roster_data: res.members, roster_fetch: true });
        console.log(res);
      });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Flame +15 Checker</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>
            Checking if the wittle Flamies are doing their wittle 15's uwu
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={this.get_roster}>Check!</button>
        </div>
        <div style={{ marginTop: 10 }}>
          {this.state.roster_fetch ? (
            <MythicTable roster_data={this.state.roster_data} />
          ) : null}
        </div>
      </div>
    );
  }
}
export default MythicDungeonChecker;
