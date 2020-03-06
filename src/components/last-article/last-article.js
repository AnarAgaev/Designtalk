import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './last-article.scss';

export default class LastArticle extends Component {
  render() {
    const { handleCursorOverImg, lastArticle } = this.props;
    const { id, url, rubric, title, preview, picture } = lastArticle;
    const urlArticle = '/articles/' + url;
    const urlPic = '/img/' + picture;
    const urlRubric = '/articles/?filter=true&rubric=' + rubric.url;

    return (
      <Container>
        <Row>
          <Col lg={4}>
            <div className="last-article">
              <Link to={ urlRubric } className="last-article__link">{ rubric.name }</Link>
              <h3 className="last-article__title">{ title }</h3>
              <p className="last-article__description">{ preview }</p>
              <Link to={ urlArticle } className="button">Читать</Link>
            </div>
          </Col>
          <Col lg={8}>
            <Link to={ urlArticle } className="last-article__picture">
              <img
                src={ urlPic } alt="Some text"
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