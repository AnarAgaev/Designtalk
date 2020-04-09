import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Picture from "../picture"
import './article-list-item.scss';

const ArticleListItem = ({
  id, url, rubric,
  title, picture }) => {

  const urlImage = `https://spacebuilder.ru/images/${picture}`;
  const urlRubric = `/articles/?filer=true&rubric=${rubric.url}`;

  return (
    <Col lg={6} className="article-list__item" key={ id }>
      <Link
        to={ `/articles/${url}` }
        className="article-list__picture">
        <Picture url={ urlImage } />
      </Link>
      <Link
        to={ `/articles/${url}` }
        className="article-list__caption">
        <span>{ title }</span>
      </Link>
      <Link
        to={ urlRubric }
        className="article-list__rubric link">
        { rubric.name }
      </Link>
    </Col>
  );
};

export default ArticleListItem;