import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./article-list.scss";

const ArticleList = ({ articles, articleListTitle }) => {
  return (
    <Container>
      <Row className="article-list__title" >
        <Col xs={12}>
          <h3>{ articleListTitle }</h3>
        </Col>
      </Row>
      <Row className="article-list">
        { articles }
      </Row>
    </Container>
  );
};

export default ArticleList;