import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavContainer from "../nav";
import PrivacyListContainer from "../privacy-list";
import LogotypeContainer from "../logotype";
import Copyright from "../copyright";
import SocialList from "../socials-list";
import SocialTitle from "../social-title";
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3}><NavContainer/></Col>
          <Col lg={5}><PrivacyListContainer/></Col>
          <Col lg={4}>
            <SocialTitle/>
            <SocialList/>
          </Col>
          <Col lg={12}><Copyright/></Col>
          <Col lg={12}><LogotypeContainer/></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;