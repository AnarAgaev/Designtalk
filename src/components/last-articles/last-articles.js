import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './last-articles.scss';

const LastArticles = ({
    articles,
    isTitleHover,
    handleTitleHover
  }) => {

  const article = { ...articles[0] };
  const { picture = 'undefined.png' } = article;
  const urlArticle = '/articles/' + article.url;

  return (
    <Container>
      <Row>


        <Col lg={6} style={{zIndex: '1'}}>
          <div className="last-article">

            <Link
              to={ urlArticle }
              className="last-article__title">
              <span className={ isTitleHover ? 'hover' : null } >
                { article.title }
              </span>
            </Link>
            <p className="last-article__description">
              { article.preview }
            </p>
            <Link
              to={ urlArticle }
              className="button">
              Читать
            </Link>
          </div>
        </Col>


        <Col lg={6} className="last-article__picture-wrap" >
          <Link
            to={ urlArticle }
            className="last-article__picture">
            <img
              src={ 'https://designtalk.ru/images/' + picture }
              alt={ article.title }
              onMouseOut={ () => handleTitleHover(false) }
              onMouseOver={ handleTitleHover } />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LastArticles;