import React, { Component } from "react";
import "./MythicDungeonChecker.css";
import Cookies from "js-cookie";

var BNET_ID = "2f921dc15b264080b0d4aa5d82414475";
var BNET_SECRET = "fKeHKEG0UlXRrfxx424o5rFjeojGPOHU";
var BNET_TOKEN_URI = "https://us.battle.net/oauth/token";
var BNET_AUTH_URI = "	https://us.battle.net/oauth/authorize";
var BNET_SCOPES = ["wow.profile"];

class MythicDungeonChecker extends Component {
  state = {
    access_token: null,
    loggedIn: false,
  };

  async set_new_token() {
    await fetch(BNET_TOKEN_URI, {
      body: "grant_type=client_credentials",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        BNET_ID +
        "&client_secret=" +
        BNET_SECRET,
      method: "POST",
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        Cookies.set("flame_bnet_token", responseData.access_token);
        this.setState({
          access_token: responseData.access_token,
          loggedIn: true,
        });
      });
  }

  async componentDidMount() {
    if (Cookies.get("flame_bnet_token") == null) {
      await this.set_new_token();
    } else {
      this.setState({
        access_token: Cookies.get("flame_bnet_token"),
        loggedIn: true,
      });
    }
  }

  render() {
    if (this.state.loggedIn) {
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
