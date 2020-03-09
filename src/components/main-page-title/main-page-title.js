import React from "react";
import { Container } from "react-bootstrap";
import './main-page-title.scss';

const MainPageTitle = () => {
  return (
    <Container>
      <h1 className="main-page-title">
        Spacebuilder
        <span> &#8212; цифровой блог о дизайне пространства</span>
      </h1>
    </Container>
  );
};

export default MainPageTitle;