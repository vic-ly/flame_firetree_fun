import React, { Component } from "react";
import "./MythicDungeonChecker.css";
import Cookies from "js-cookie";

class MythicDungeonChecker extends Component {
  state = {
    journal_data: {},
  };

  grab_data = async () => {
    await fetch(
      "https://us.api.blizzard.com/profile/wow/character/spirestone/zalieria/mythic-keystone-profile/season/2?namespace=profile-us&locale=en_US&access_token=" +
        this.state.access_token
    )
      .catch((e) => console.log(e))
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        this.setState({ journal_data: res });
      });
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Flame +15 Checker</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3>
              Checking if the wittle Flamies are doing their wittle 15's uwu
            </h3>
          </div>
          <button onClick={this.grab_data}>CLICK ME!</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>NO ACCESS TOKEN!</p>
        </div>
      );
    }
  }
}
export default MythicDungeonChecker;
