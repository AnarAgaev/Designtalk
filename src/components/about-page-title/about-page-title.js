import React from "react";
import { Container } from "react-bootstrap";
import './about-page-title.scss';

const AboutPageTitle = () => {
  return (
    <Container>
      <h1 className="about-page-title">
        Designtalk.ru
        <span> &#8212; цифровой блог о дизайне пространства</span>
      </h1>
    </Container>
  );
};

export default AboutPageTitle;