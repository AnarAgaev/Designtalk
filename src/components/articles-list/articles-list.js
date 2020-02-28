import React from "react";

import './articles-list.scss';
import {Container, Row} from "react-bootstrap";
import ArticlesListItem from "../articles-list-item";

const ArticlesList = ({ articles }) => {

  const  elements = articles.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <ArticlesListItem key={ id } { ...itemProps } />
    );
  });

  return (
    <Container>
      <Row className="article-list">
        { elements }
      </Row>
    </Container>
  );
};

export default ArticlesList;