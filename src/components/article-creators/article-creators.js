import React from "react";
import "./article-creators.scss";

const ArticleCreators = ({ author, photographer, stylist }) => {
  return (
    <ul className="article-creators__list">
      <li className="article-creators__item">
        <span className="article-creators__caption">автор проекта:</span>
        <span className="article-creators__person">{ author }</span>
      </li>
      <li className="article-creators__item">
        <span className="article-creators__caption">фотограф:</span>
        <span className="article-creators__person">{ photographer }</span>
      </li>
      <li className="article-creators__item">
        <span className="article-creators__caption">стилист:</span>
        <span className="article-creators__person">{ stylist }</span>
      </li>
    </ul>
  );
};

export default ArticleCreators;