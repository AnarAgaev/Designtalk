import React from "react";
import { Container } from "react-bootstrap";
import Logotype from "../logotype";
import Nav from "../nav";
import SocialList from "../socials-list";
import ButtonFeedbackContainer from "../button-feedback";
import './header.scss';

const Header = ({ hide }) => {
  const clazz = hide ?
    'header hide' : 'header';

  return (
    <header className={ clazz }>
      <Container>
        <Logotype/>
        <Nav/>
        <SocialList/>
        <ButtonFeedbackContainer/>
      </Container>
    </header>
  );
};

export default Header;