import React, { Component } from "react";
import { Table } from "react-bootstrap";

class MythicTable extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tableBody: [],
    tableBodyReady: false,
  };

  checkForFifteen = (data) => {
    var i;
    for (i of data.mythic_plus_previous_weekly_highest_level_runs) {
      if (i.mythic_level >= 15) {
        return true;
      }
    }
    return false;
  };

  capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  checkMythicPlus = async (name, realm, char, index) => {
    var didTheyDoIt = false;
    await fetch(
      "https://raider.io/api/v1/characters/profile?region=us&realm=" +
        realm +
        "&name=" +
        name +
        "&fields=mythic_plus_previous_weekly_highest_level_runs"
    )
      .catch((e) => console.log(e))
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        didTheyDoIt = this.checkForFifteen(res);
        this.setState({
          tableBody: this.state.tableBody.concat(
            <tr key={index}>
              <td>{char.character.name}</td>
              <td>{this.capitalize(char.character.realm.slug)}</td>
              <td>{char.rank}</td>
              <td>{didTheyDoIt ? "Yes" : "No"}</td>
              <tc></tc>
            </tr>
          ),
        });
      });
  };

  renderCharacter = (char, index) => {
    var didTheyDoIt = false;
    if (char.rank > 6 || char.character.level < 50) {
      return null;
    }
    didTheyDoIt = this.checkMythicPlus(
      char.character.name,
      char.character.realm.slug,
      char,
      index
    );
  };

  componentDidMount() {
    this.props.roster_data.map(this.renderCharacter);
  }

  sortByName = () => {};

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Server</th>
            <th>Guild Rank</th>
            <th>15 Last Week?</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableBody !== null ? this.state.tableBody : null}
        </tbody>
      </Table>
    );
  }
}

export default MythicTable;
