import React from "react";
import "./article-creators.scss";

const createPerson = (title, name) => {
  if (name) {
    return (
      <li className="article-creators__item">
        <span className="article-creators__caption">{title}:</span>
        <span className="article-creators__person">{ name }</span>
      </li>
    );
  }
};

const ArticleCreators = ({ author, photographer, stylist }) => {
  return (
    <ul className="article-creators__list">
      { createPerson('автор проекта', author) }
      { createPerson('фотограф', photographer) }
      { createPerson('стилист', stylist) }
    </ul>
  );
};

export default ArticleCreators;