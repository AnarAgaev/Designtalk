import React from "react";
import { Col } from "react-bootstrap";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <Col lg={6} className="sidebar">
      <a target="_blank" rel="noopener noreferrer"
         href="https://www.lg.com/ru/lg-signature/performance/perfection-realized-refrigerator">
        <img src="https://designtalk.ru/images/adv/2714279522559089340.jpg" alt="" />
      </a>
    </Col>
  );
};

export default Sidebar;