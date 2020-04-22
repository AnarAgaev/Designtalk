import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import VerticalAdvBanner from "../../vertical-adv-banner";
import ArticleCreators from "../../article-creators";
import SharingArticle from "../../sharing-article";
import Subscribe from "../../subscribe";
import { createMarkup } from "../../../utils";
import './article.scss';

const Article = ({
  article: {
    rubric, title, subtitle,
    date, copywriter, author,
    photographer, stylist,
    content, picture
  } }) => {

  const urlImage = `https://designtalk.ru/images/${picture}`;
  const urlRubric = `/rubrics/${rubric.link}`;

  return (
    <>
      <Container className="article">
        <Row>
          <Col lg={12}>
            <Link to={urlRubric} className="article__rubric">
              { rubric.name }
            </Link>
            <h1 className="article__title">{ title }</h1>
            <div className="article__subtitle">{ subtitle }</div>

            <div className="article__copy">
              <span className="article__copywriter">{ copywriter.name }</span>
              <span className="article__date">{ date }</span>
            </div>

            { picture ? <img src={ urlImage } alt={ title }/> : null }
          </Col>

          <Col lg={8} className="article__wrap">
            <div
              dangerouslySetInnerHTML={ createMarkup(content) }
              className="article__content" />

            <ArticleCreators
              author={ author.name }
              photographer={ photographer.name }
              stylist={ stylist.name } />

            <SharingArticle />
          </Col>

          <Col lg={4} className="article__sidebar">
            <div className="sticky adv-banner">
              <VerticalAdvBanner />
            </div>
          </Col>
        </Row>
      </Container>

      <Subscribe />
    </>
  );
};

export default Article;