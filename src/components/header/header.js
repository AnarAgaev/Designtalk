import React from "react";
import { Container } from "react-bootstrap";
import LogotypeContainer from "../logotype";
import NavContainer from "../nav";
import SocialList from "../socials-list";
import ButtonFeedbackContainer from "../button-feedback";
import BtnShowMenu from "../btn-show-menu";
import MobileNavSocial from "../mobile-nav-social";
import SendMailToUs from "../send-mail-to-us";
import MobileNavLogo from "../mobile-nav-logo";
import BtnHideMenu from "../btn-hide-menu";
import './header.scss';

const Header = () => {
  return (
    <header className="header" >
      <Container>
        <LogotypeContainer/>
        <NavContainer
          mobileNavSocial={ MobileNavSocial }
          sendMailToUs={ SendMailToUs }
          mobileNavLogo={ MobileNavLogo }
          btnHideMenu={ BtnHideMenu } />
        <SocialList visible="big-screen-visible" />
        <ButtonFeedbackContainer/>
        <BtnShowMenu visible="big-screen-hide"/>
      </Container>
    </header>
  );
};

export default Header;