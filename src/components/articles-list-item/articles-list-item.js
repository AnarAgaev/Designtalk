import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import './articles-list-item.scss';

export default class ArticlesListItem extends Component {
  render() {
    const { url, rubric, title, picture, handleCursorOverImg } = this.props;
    const urlRubric = `/article/?filer=true&rubric=${rubric.url}`;

    return (
      <Col className="article-list__item">
        <Link to={ `/article/${url}` } className="article-list__picture">
          <img
            src={ `/img/${picture}` } alt={ title }
            onMouseOut={() => handleCursorOverImg(false)}
            onMouseMove={({ pageX, pageY }) => {
              handleCursorOverImg(true, pageX, pageY)
            }} />
        </Link>
        <Link to="/" className="article-list__caption">
          <span>{ title }</span>
        </Link>
        <Link to={ urlRubric } className="article-list__rubric">
          { rubric.name }
        </Link>
      </Col>
    );
  }
};