import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import VerticalAdBanner from "../../vertical-ad-banner";
import ArticleCreators from "../../article-creators";
import SharingArticle from "../../sharing-article";
import Subscribe from "../../subscribe";
import { createMarkup, jumpToTop } from "../../../utils";
import AbsoluteWrapper from "../../absolute-wrapper";
import LastRubricArticleListContainer from "../../last-rubric-article-list";
import HorizontalAdBanner from "../../horizontal-ad-banner";
import { Helmet } from "react-helmet";
import './article.scss';

class Article extends Component {

  componentDidMount() {
    jumpToTop();
  }

  render() {
    const { article: {
      rubric, title, subtitle, date, copywriter, author,
      photographer, stylist, content, picture, description,
      keywords, url
    }} = this.props;

    const urlImage = `https://designtalk.ru/images/${picture}`;
    const urlRubric = `/rubrics/${rubric.link}`;

    return (
      <AbsoluteWrapper>
        <Helmet>
          <title>{title ? `${title} | ` : ''}Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.</title>
          <meta name="description" content={ description } />
          <meta name="keywords" content={ keywords } />
          <link rel="canonical" href={ `https://designtalk.ru/articles/${url}` } />

          <meta name="og:title" content={ title } />
          <meta property="og:title" content={ title } />
          <meta name="og:description" content={ description } />
          <meta property="og:description" content={ description } />
          <meta name="og:image" content={ urlImage } />
          <meta property="og:image" content={ urlImage } />
          <meta property="og:type" content="article" />
          <meta name="og:url" content={ `https://designtalk.ru/articles/${url}` } />
          <meta property="og:url" content={ `https://designtalk.ru/articles/${url}` } />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Container className="article">
          <Row>
            <Col lg={12}>
              <HorizontalAdBanner />
            </Col>

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
                <VerticalAdBanner />
              </div>
            </Col>
          </Row>
        </Container>

        <Subscribe />

        <LastRubricArticleListContainer
          rubric={ rubric.id } />
      </AbsoluteWrapper>
    );
  }
}

export default Article;