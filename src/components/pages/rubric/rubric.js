import React, { Component } from "react";
import LastRubricArticleContainer from "../../last-rubric-article";
import RubricArticleListContainer from "../../rubric-article-list";
import ShowMoreRubricArticles from "../../show-more-rubric-articles";
import { resetRubricArticlesData } from "../../../actions/";
import { connect } from "react-redux";
import { jumpToTop } from "../../../utils";
import Subscribe from "../../subscribe";
import AbsoluteWrapper from "../../absolute-wrapper";
import HorizontalAdBanner from "../../horizontal-ad-banner";
import { Helmet } from "react-helmet";
import "./rubric.scss";

class Rubric extends Component {

  componentDidMount() {
    jumpToTop();
  }

  componentWillUnmount() {
    this.props.resetRubricArticlesData();
  }

  render() {
    const { rubric, rubricTitle } = this.props;
    return (
      <AbsoluteWrapper>
        <Helmet>
          <title>{rubricTitle ? `#${rubricTitle} | ` : ''}Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.</title>
          <meta name="description" content={`Список всех материалов рубрики ${rubricTitle}`} />
          <meta name="keywords" content={`рубрика, ${rubricTitle}, рубрика ${rubricTitle}`} />
          <link rel="canonical" href={`https://designtalk.ru/rubrics/${rubric}`} />

          <meta name="og:title" content={`#${rubricTitle} | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.`} />
          <meta property="og:title" content={`#${rubricTitle} | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.`} />
          <meta name="og:description" content={`Список всех материалов рубрики ${rubricTitle}`} />
          <meta property="og:description" content={`Список всех материалов рубрики ${rubricTitle}`} />
          <meta name="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:type" content="article" />
          <meta name="og:url" content={`https://designtalk.ru/rubrics/${rubric}`} />
          <meta property="og:url" content={`https://designtalk.ru/rubrics/${rubric}`} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <LastRubricArticleContainer
          rubric={ rubric } />

        <HorizontalAdBanner />

        <RubricArticleListContainer
          rubric={ rubric } />

        <ShowMoreRubricArticles />
        <Subscribe />
      </AbsoluteWrapper>
    );
  }
}

const mapStateToProps = ({ lastRubricArticle: { rubricTitle }}) => {
  return {
    rubricTitle
  };
};

const mapDispatchToProps = {
  resetRubricArticlesData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rubric);