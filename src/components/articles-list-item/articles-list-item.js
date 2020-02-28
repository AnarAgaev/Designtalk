import React from "react";
import { Link } from "react-router-dom";

import './articles-list-item.scss';

const ArticlesListItem = ({ img, rubric, caption }) => {
  return (
    <div className="article-list__item">
      <Link to="/" className="article-list__picture"><img src={ img } alt="Image"/></Link>
      <Link to="/" className="article-list__caption"><span>{ caption }</span></Link>
      <Link to="/" className="article-list__link">{ rubric }</Link>
    </div>
  );
};

export default ArticlesListItem;