import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './last-article.scss';

export default class LastArticle extends Component {

  state = {
    isTitleHover: false
  };

  handleTitleOver = () => {
    this.setState({
      isTitleHover: true
    });
  };

  handleTitleOut = () => {
    this.setState({
      isTitleHover: false
    });
  };

  render() {
    const { isTitleHover } = this.state;
    const { ...article } = this.props.article;
    const { ...rubric } = article.rubric;
    const { picture = 'undefined.png' } = article;
    const urlArticle = '/articles/' + article.url;
    const urlRubric = '/articles/filter/' + rubric.link;

    return (
      <Container>
        <Row>
          <Col lg={6} style={{zIndex: '1'}}>
            <div className="last-article">
              <Link to={ urlRubric } className="last-article__link">{ rubric.name }</Link>
              <Link to={ urlArticle } className="last-article__title">
                <span className={ isTitleHover ? 'hover' : null }>{ article.title }</span>
              </Link>
              <p className="last-article__description">{ article.preview }</p>
              <Link to={ urlArticle } className="button">Читать</Link>
            </div>
          </Col>
          <Col lg={6}>
            <Link to={ urlArticle } className="last-article__picture">
              <img
                src={ 'https://spacebuilder.ru/images/' + picture }
                alt={ article.title }
                onMouseOut={ this.handleTitleOut }
                onMouseOver={ this.handleTitleOver } />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
};