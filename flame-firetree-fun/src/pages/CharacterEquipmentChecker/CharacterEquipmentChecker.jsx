import React, { Component } from "react";
// import "./MythicDungeonChecker.css";
import Cookies from "js-cookie";
import EquipmentTable from "../../components/EquipmentTable/EquipmentTable";
import { Form, Button } from "react-bootstrap";
class CharacterEquipmentChecker extends Component {
  state = {
    serverName: " ",
    characterName: " ",
    equipmentData: [],
    equipmentBool: false,
  };

  handleServerChange = (event) => {
    this.setState({ serverName: event.target.value });
  };
  handleNameChange = (event) => {
    this.setState({ characterName: event.target.value });
  };

  //creating the character equipment API

  get_equipment = async () => {
    fetch(
      "https://us.api.blizzard.com/profile/wow/character/" +
        this.state.serverName.toLowerCase().replace("'", "").replace(" ", "-") +
        "/" +
        this.state.characterName
          .toLowerCase()
          .replace("'", "")
          .replace(" ", "-") +
        "/equipment?namespace=profile-us&locale=en_US&access_token=" +
        this.props.token
    )
      .catch((e) => console.log(e))
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          equipmentData: res.equipped_items,
          equipmentBool: true,
        });
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
          <h1>Character Checker</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Checking Guildie's Equipment</h3>
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
                onChange={this.handleServerChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Character Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="characterName"
                onChange={this.handleNameChange}
              />
            </Form.Group>
          </Form>
          <button onClick={this.get_equipment}>Check!</button>
        </div>
        <div style={{ marginTop: 10 }}>
          {this.state.equipmentBool ? (
            <EquipmentTable equipmentData={this.state.equipmentData} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default CharacterEquipmentChecker;
