import React from "react";
import { Container } from "react-bootstrap";
import Logotype from "../logotype";
import Nav from "../nav";
import SocialList from "../socials-list";
import './header.scss';

const Header = ({ hide, painted }) => {

  let clazz = 'header';
  clazz += painted ? ' painted' : '';
  clazz += hide ? ' hide' : '';

  return (
    <header className={ clazz }>
      <Container>
        <Logotype/>
        <Nav/>
        <SocialList/>
      </Container>
    </header>
  );
};

export default Header;