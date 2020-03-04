import React, { Component } from "react";

import './last-article.scss';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import image from './minimalist-chalet-with-amazing-view-pufikhomes-3.jpg';

export default class LastArticle extends Component {
  render() {
    const { handleCursorOverImg } = this.props;

    return (
      <Container>
        <Row>
          <Col lg={4}>
            <div className="last-article">
              <Link to="/" className="last-article__link">Деревянные дома</Link>
              <h3 className="last-article__title">
                Минималистичный деревянный домик в горах с роскошным видом
              </h3>
              <p className="last-article__description">
                Роскошный вид из окон этого горного домика во
                Франции контрастирует с простым, но уютным интерьером.
                Отделка выполнена из светлого дерева, почти вся мебель
                также...
              </p>
              <Link to="/" className="button">Читать</Link>
            </div>
          </Col>
          <Col lg={8}>
            <Link to="/" className="last-article__picture">
              <img
                src={image} alt="Some text"
                onMouseOut={() => handleCursorOverImg(false)}
                onMouseMove={({pageX, pageY}) => {
                  handleCursorOverImg(true, pageX, pageY)
                }} />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
};