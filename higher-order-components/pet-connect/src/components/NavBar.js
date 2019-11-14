import React, {Component} from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

export default class NavBar extends Component {



render() {
return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">PetConnect</Navbar.Brand>
    <Nav>
      <Link to="/sign_up">SignUp</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/connect">Connect</Link>
      <Link to="/matches">Matches</Link>
      <Link to="/messages">Messages</Link>
    </Nav>
  </Navbar>
)
}
}