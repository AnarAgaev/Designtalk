import React from "react";
import { Col } from "react-bootstrap";
import VerticalAdvBanner from "../vertical-adv-banner";
import "./article-list-banner.scss";

const ArticleListBanner = () => {
  return (
    <Col lg={6} className="sidebar">
      <VerticalAdvBanner />
    </Col>
  );
};

export default ArticleListBanner;