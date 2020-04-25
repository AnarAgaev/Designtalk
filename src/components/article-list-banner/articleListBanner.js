import React from "react";
import { Col } from "react-bootstrap";
import VerticalAdBanner from "../vertical-ad-banner";
import "./article-list-banner.scss";

const ArticleListBanner = () => {
  return (
    <Col lg={6} className="sidebar">
      <VerticalAdBanner />
    </Col>
  );
};

export default ArticleListBanner;