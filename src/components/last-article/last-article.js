import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './last-article.scss';

export default class LastArticle extends Component {
  state = {
    titleHover: false
  };

  handleTitleOver = () => {
    this.setState({
      titleHover: true
    });
  };

  handleTitleOut = () => {
    this.setState({
      titleHover: false
    });
  };

  render() {
    const { titleHover } = this.state;

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
          <Col lg={6} style={{zIndex: '1'}}>
            <div className="last-article">
              <Link to={ urlRubric } className="last-article__link">{ name }</Link>
              <Link to={ urlArticle } className="last-article__title">
                <span className={ titleHover ? 'hover' : null }>{ title }</span>
              </Link>
              <p className="last-article__description">{ preview }</p>
              <Link to={ urlArticle } className="button">Читать</Link>
            </div>
          </Col>
          <Col lg={6}>
            <Link to={ urlArticle } className="last-article__picture">
              <img
                src={ urlPic } alt={ title }
                onMouseOut={ this.handleTitleOut }
                onMouseOver={ this.handleTitleOver } />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
};