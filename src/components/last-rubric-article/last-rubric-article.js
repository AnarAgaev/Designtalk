import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RubricTitle from "../rubric-title";
import './last-rubric-article.scss';

const LastRubricArticle = ({
    article: {
      url,
      title,
      preview,
      picture = 'undefined.png'
    },
    rubricTitle,
    isTitleHover,
    handleTitleHover
  }) => {

  const urlArticle = '/articles/' + url;

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <RubricTitle title={ rubricTitle } />
        </Col>

        <Col lg={5}>
          <div className="last-rubric-article">
            <Link
              to={ urlArticle }
              className="last-rubric-article__title">
              <span className={ isTitleHover ? 'hover' : null } >
                { title }
              </span>
            </Link>
            <p className="last-rubric-article__description">
              { preview }
            </p>
            <Link
              to={ urlArticle }
              className="button">
              Читать
            </Link>
          </div>
        </Col>

        <Col lg={7} className={"my-5"}>
          <Link to={ urlArticle } >
            <img
              src={ 'https://designtalk.ru/images/' + picture }
              alt={ title }
              onMouseOut={ () => handleTitleHover(false) }
              onMouseOver={ handleTitleHover } />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LastRubricArticle;