import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

import "./NavBar.css";
import MythicDungeonChecker from "../../pages/MythicDungeonChecker/MythicDungeonChecker";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <div className="navbar-header">
            <Navbar.Brand as={Link} href="#home">
              <h1>FLAME FIRETREE</h1>
            </Navbar.Brand>
          </div>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
          </Nav>

          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
        </Navbar>
        <div>
          <Switch>
            <Route exact path="/" component={MythicDungeonChecker} />
            <Route exact path="/home" component={MythicDungeonChecker} />
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
