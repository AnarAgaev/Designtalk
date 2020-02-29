import React, { Component } from "react";
import { Link } from "react-router-dom";

import './popular-list-item.scss';

export default class PopularListItem extends Component {
  render() {
    const { img, description,
            rubric, caption,
            handleCursorOverImg } = this.props;

    return (
      <article className="popular-list-item">
        <div>
          <Link to="/"
            className="popular-list-item__picture"
            style={{backgroundImage: `url(${ img })`}}
            onMouseOut={() => handleCursorOverImg(false)}
            onMouseMove={({pageX, pageY}) => {
              handleCursorOverImg(true, pageX, pageY)
            }} />
          <Link className="popular-list-item__caption" to="/">
            <span>{ caption }</span>
          </Link>
        </div>
        <p className="popular-list-item__description">
          <span>{ description }</span><a href="#">{ rubric }</a>
        </p>
      </article>
    );
  }
};