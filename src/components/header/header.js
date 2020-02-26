import React from "react";
import {Container} from "react-bootstrap";

import './header.scss';

import Logotype from "../logotype";
import Nav from "../nav";
import SocialList from "../socials-list";

const Header = () => {
  return (
    <header className="header" id="header">
      <Container>
        <Logotype/>
        <Nav/>
        <SocialList/>
      </Container>
    </header>
  );
};

export default Header;