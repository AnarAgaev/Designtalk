import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import ErrorBoundary from "../error-boundary";
import './articles-list-item.scss';

export default class ArticlesListItem extends Component {
  render() {
    const { url, rubric, title, picture, handleCursorOverImg } = this.props;
    const urlRubric = `/articles/?filer=true&rubric=${rubric.url}`;

    return (
      <ErrorBoundary>
        <Col className="article-list__item">
          <Link to={ `/articles/${url}` } className="article-list__picture">
            <img
              src={ `/images/${picture}` } alt={ title }
              onMouseOut={() => handleCursorOverImg(false)}
              onMouseMove={({ pageX, pageY }) => {
                handleCursorOverImg(true, pageX, pageY)
              }} />
          </Link>
          <Link to={ `/articles/${url}` } className="article-list__caption">
            <span>{ title }</span>
          </Link>
          <Link to={ urlRubric } className="article-list__rubric">
            { rubric.name }
          </Link>
        </Col>
      </ErrorBoundary>
    );
  }
};