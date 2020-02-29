import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Col} from "react-bootstrap";

import './articles-list-item.scss';

export default class ArticlesListItem extends Component {
  render() {
    const { img, rubric, caption, handleCursorOverImg } = this.props;

    return (
      <Col className="article-list__item">
        <Link to="/" className="article-list__picture">
          <img
            src={ img } alt="Image"
            onMouseOut={() => handleCursorOverImg(false)}
            onMouseMove={({pageX, pageY}) => {
              handleCursorOverImg(true, pageX, pageY)
            }} />
        </Link>
        <Link to="/" className="article-list__caption">
          <span>{ caption }</span>
        </Link>
        <Link to="/" className="article-list__rubric">
          { rubric }
        </Link>
      </Col>
    );
  }
};