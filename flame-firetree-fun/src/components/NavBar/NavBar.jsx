import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

import "./NavBar.css";
import MythicDungeonChecker from "../../pages/MythicDungeonChecker/MythicDungeonChecker";
import CharacterEquipmentChecker from "../../pages/CharacterEquipmentChecker/CharacterEquipmentChecker";
import Dashboard from "../../pages/Dashboard/Dashboard";
import AboutUs from "../../pages/AboutUs/AboutUs";

class NavBar extends Component {
  componentDidMount() {}

  render() {
    console.log(this.props.access_token);
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <div className="navbar-header">
            <Navbar.Brand as={Link} to="/">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginLeft: 5 }}>
                  <h1>World of Warcraft Checker</h1>
                </div>
              </div>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Utilities" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/mythiccheck"
                  token={this.props.token}
                >
                  Mythic Check
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/charactercheck"
                  token={this.props.token}
                >
                  Character Check
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/aboutus">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Dashboard token={this.props.access_token} />}
            />
            <Route
              exact
              path="/mythiccheck"
              component={() => (
                <MythicDungeonChecker token={this.props.access_token} />
              )}
            />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route
              exact
              path="/charactercheck"
              component={() => (
                <CharacterEquipmentChecker token={this.props.access_token} />
              )}
            />
            <Route
              //cannot find out fix
              render={function () {
                return <p>Not found</p>;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default NavBar;
