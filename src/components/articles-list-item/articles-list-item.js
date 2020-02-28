import React from "react";

import './articles-list-item.scss';
import {Link} from "react-router-dom";

const ArticlesListItem = ({ img, hashtag, caption }) => {
  return (
    <div className="article-list__item">
      <Link to="/" className="article-list__picture"><img src={ img } alt="Image"/></Link>
      <Link to="/" className="article-list__caption"><span>{ caption }</span></Link>
      <Link to="/" className="article-list__link">{ hashtag }</Link>
    </div>
  );
};

export default ArticlesListItem;