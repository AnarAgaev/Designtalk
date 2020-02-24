import React, {Component} from "react";
import {Container} from "react-bootstrap";

import './header.scss';

import Logotype from "../logotype";
import Nav from "../nav";
import SocialList from "../socials-list";

export default class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
        <Container>
          <Logotype/>
          <Nav/>
          <SocialList/>
        </Container>
      </header>
    )
  }
}