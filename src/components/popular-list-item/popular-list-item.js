import React from "react";
import { Link } from "react-router-dom";
import './popular-list-item.scss';

const PopularListItem = ({ id, url, rubric, title, preview, picture }) => {

  const imageUrl = `url(https://designtalk.ru/images/${ picture })`;
  const rubricUrl = `/articles/?filter=true&rubric=${rubric.url}`;

  return (
    <article className="popular-list-item" key={id}>
      <div>
        <Link to={ `/articles/${url}` }
          className="popular-list-item__picture"
          style={{ backgroundImage: imageUrl }} />
        <Link to={ `/articles/${url}` }
              className="popular-list-item__caption">
          <span>{ title }</span>
        </Link>
      </div>
      <p className="popular-list-item__description">
        <span>{ preview }</span>
        <a href={ rubricUrl }>
          { rubric.name }
        </a>
      </p>
    </article>
  );
};

export default PopularListItem;