import React, { Component } from "react";
import "./MythicDungeonChecker.css";
import Cookies from "js-cookie";
import MythicTable from "../../components/MythicTable/MythicTable";
import { Form, Button } from "react-bootstrap";
class MythicDungeonChecker extends Component {
  state = {
    roster_data: {},
    roster_fetch: false,
    serverName: " ",
    guildName: " ",
  };

  get_roster = async () => {
    await fetch(
      "https://us.api.blizzard.com/data/wow/guild/" +
        this.state.serverName.toLowerCase().replace("'", "").replace(" ", "-") +
        "/" +
        this.state.guildName.toLowerCase().replace(" ", "-") +
        "/roster?namespace=profile-us&locale=en_US&access_token=" +
        this.props.token
    )
      .catch((e) => console.log(e))
      .then((response) => response.json())
      .then((res) => {
        this.setState({ roster_data: res.members, roster_fetch: true });
        console.log(res);
      });
  };

  handleChange = (event) => {
    let obj = {};
    obj[event.target.placeholder] = event.target.value;
    this.setState(obj);
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
          <h1>Guild +15 Checker</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>
            Checking if the wittle guildies are doing their wittle 15's uwu
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Server Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="serverName"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Guild Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="guildName"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
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
