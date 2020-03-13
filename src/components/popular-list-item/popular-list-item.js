import React, { Component } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../error-boundary";
import './popular-list-item.scss';

export default class PopularListItem extends Component {
  render() {
    const { handleCursorOverImg, url,
            rubric, title, preview,
            picture } = this.props;

    return (
      <ErrorBoundary>
        <article className="popular-list-item">
          <div>
            <Link to={ `/articles/${url}` }
              className="popular-list-item__picture"
              style={{ backgroundImage: `url(/images/${ picture })` }}
              onMouseOut={() => handleCursorOverImg(false)}
              onMouseMove={({pageX, pageY}) => {
                handleCursorOverImg(true, pageX, pageY)
              }} />
            <Link to={ `/articles/${url}` }
                  className="popular-list-item__caption">
              <span>{ title }</span>
            </Link>
          </div>
          <p className="popular-list-item__description">
            <span>{ preview }</span>
            <a href={ `/articles/?filter=true&rubric=${rubric.url}` }>
              { rubric.name }
            </a>
          </p>
        </article>
      </ErrorBoundary>
    );
  }
};