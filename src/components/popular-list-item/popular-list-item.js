import React from "react";
import { Link } from "react-router-dom";

import './popular-list-item.scss';

const PopularListItem = ({ img, caption, rubric, description }) => {
  return (
    <article className="popular-list-item">
      <div>
        <Link to="/"
              className="popular-list-item__picture"
              style={{backgroundImage: `url(${ img })`}} />
        <Link className="popular-list-item__caption" to="/">
          <span>{ caption }</span>
        </Link>
      </div>
      <p className="popular-list-item__description">
        <span>{ description }</span><a href="#">{ rubric }</a>
      </p>
    </article>
  );
};

export default PopularListItem;