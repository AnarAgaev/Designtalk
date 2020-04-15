import React from "react";
import { Container } from "react-bootstrap";
import LogotypeContainer from "../logotype";
import NavContainer from "../nav";
import SocialList from "../socials-list";
import ButtonFeedbackContainer from "../button-feedback";
import './header.scss';

const Header = ({ hide }) => {
  const clazz = hide ?
    'header hide' : 'header';

  return (
    <header className={ clazz }>
      <Container>
        <LogotypeContainer/>
        <NavContainer/>
        <SocialList/>
        <ButtonFeedbackContainer/>
      </Container>
    </header>
  );
};

export default Header;