import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class EquipmentTable extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tableBody: [],
    tableBodyReady: false,
  };
  componentDidUpdate(prevprops) {
    if (this.props.equipmentData !== prevprops.equipmentData) {
      this.setState({ tableBody: [] });
      this.props.equipmentData.map(this.renderEquipment);
    }
  }

  renderEquipment = (char, index) => {
    this.setState({
      tableBody: this.state.tableBody.concat({
        name: char.name,
        slot: char.slot.name,
        level: char.level.value,
      }),
    });
    console.log(this.state.tableBody);
  };

  componentDidMount() {
    console.log(this.props.equipmentData);
    this.props.equipmentData.map(this.renderEquipment);
  }

  render() {
    return (
      <BootstrapTable ref="table" data={this.state.tableBody}>
        <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>
          Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="slot" dataSort={true}>
          Slot
        </TableHeaderColumn>
        <TableHeaderColumn dataField="level" dataSort={true}>
          Item Level
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default EquipmentTable;
