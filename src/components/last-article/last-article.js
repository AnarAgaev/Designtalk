import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './last-article.scss';
import Cursor from "../cursor";

export default class LastArticle extends Component {
  state = {
    cursorVisible: false,
    cursorOffsetX: 0,
    cursorOffsetY: 0,
  };

  handleCursorOverImg = (visible = false, offsetX = 0, offsetY = 0) => {
    this.setState({
      cursorVisible: visible,
      cursorOffsetX: offsetX,
      cursorOffsetY: offsetY
    })
  };

  render() {
    const { cursorVisible, cursorOffsetX, cursorOffsetY } = this.state;

    const {
      url = null,
      rubric : { link = null, name = null } = [],
      title = null, preview = null,
      picture = 'img-plug.png'
    } = this.props.lastArticle;
    const urlArticle = '/articles/' + url;
    const urlPic = '/img/' + picture;
    const urlRubric = '/articles/?filter=true&rubric=' + link;

    return (
      <Container>
        <Row>
          <Col lg={4}>
            <div className="last-article">
              <Link to={ urlRubric } className="last-article__link">{ name }</Link>
              <h3 className="last-article__title">{ title }</h3>
              <p className="last-article__description">{ preview }</p>
              <Link to={ urlArticle } className="button">Читать</Link>
            </div>
          </Col>
          <Col lg={8}>
            <Link to={ urlArticle } className="last-article__picture">
              <img
                src={ urlPic } alt="Some text"
                onMouseOut={() => this.handleCursorOverImg()}
                onMouseMove={({ pageX, pageY }) => {
                  this.handleCursorOverImg(true, pageX, pageY)
                }} />
            </Link>
          </Col>
        </Row>
        <Cursor
          cursorVisible = { cursorVisible }
          cursorOffsetX = { cursorOffsetX }
          cursorOffsetY = { cursorOffsetY } />
      </Container>
    );
  }
};