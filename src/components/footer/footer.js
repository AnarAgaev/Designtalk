import React from "react";
import './footer.scss';
import {Col, Container, Row} from "react-bootstrap";
import Nav from "../nav";
import PrivacyList from "../privacy-list";
import Logotype from "../logotype";
import Copyright from "../copyright";
import SocialList from "../socials-list";
import SocialTitle from "../social-title";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3}><Nav/></Col>
          <Col lg={5}><PrivacyList/></Col>
          <Col lg={3}>
            <SocialTitle/>
            <SocialList/>
          </Col>
          <Col lg={8}><Copyright/></Col>
          <Col lg={12}><Logotype/></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;