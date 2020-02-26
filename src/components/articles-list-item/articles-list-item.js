import React from "react";

import './articles-list-item.scss';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";

const ArticlesListItem = ({ columns, columnClass, img, hashtag, caption }) => {

  const itemClasses = `article-list__item ${columnClass}`;

  return (
    <Col lg={ columns }>
      <div className={ itemClasses }>
        <Link to="/" className="article-list__picture"><img src={ img } alt="Image"/></Link>
        <Link to="/" className="article-list__caption"><span>{ caption }</span></Link>
        <Link to="/" className="article-list__link hashtag">{ hashtag }</Link>
      </div>
    </Col>
  );
};

export default ArticlesListItem;