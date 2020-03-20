import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import './article-list-item.scss';

const ArticleListItem = (article) => {

  const _baseUrl = 'https://spacebuilder.ru';
  const { url, rubric, title, picture } = article;
  const urlRubric = `/articles/?filer=true&rubric=${rubric.url}`;

  return (
    <Col className="article-list__item">
      <Link to={ `/articles/${url}` } className="article-list__picture">
        <img src={ `${_baseUrl}/images/${picture}` } alt={ title } />
      </Link>
      <Link to={ `/articles/${url}` } className="article-list__caption">
        <span>{ title }</span>
      </Link>
      <Link to={ urlRubric } className="article-list__rubric">
        { rubric.name }
      </Link>
    </Col>
  );
};

export default ArticleListItem;