import React from "react";
import { Container } from "react-bootstrap";
import './about-page-title.scss';

const AboutPageTitle = () => {
  return (
    <Container>
      <h1 className="about-page-title">
        Designtalk
        <span> &#8212; цифровое издание о дизайне пространства</span>
      </h1>
    </Container>
  );
};

export default AboutPageTitle;