import React from "react";
import { Container, Row } from "react-bootstrap";
import "./article-list.scss";

const ArticleList = ({ articles }) => {
  return (
    <Container>
      <Row className="article-list">
        { articles }
      </Row>
    </Container>
  );
};

export default ArticleList;