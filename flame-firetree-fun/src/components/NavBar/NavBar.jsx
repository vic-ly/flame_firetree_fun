import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

import "./NavBar.css";
import MythicDungeonChecker from "../../pages/MythicDungeonChecker/MythicDungeonChecker";
import Dashboard from "../../pages/Dashboard/Dashboard";
import AboutUs from "../../pages/AboutUs/AboutUs";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <div className="navbar-header">
            <Navbar.Brand as={Link} to="/">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginLeft: 5 }}>
                  <h1>FLAME FIRETREE</h1>
                </div>
              </div>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <NavDropdown title="Utilities" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/mythiccheck">
                  Mythic Check
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
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/mythiccheck" component={MythicDungeonChecker} />
            <Route exact path="/aboutus" component={AboutUs} />

            <Route
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
