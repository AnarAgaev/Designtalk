import React, { Component } from "react";
import LastArticlesContainer from "../../last-articles";
import ArticleListContainer from "../../article-list";
import ShowMoreArticles from "../../show-more-articles";
import PopularList from "../../popular-list";
import Subscribe from "../../subscribe";
import { jumpToTop } from "../../../utils";
import AbsoluteWrapper from "../../absolute-wrapper";
import HorizontalAdBanner from "../../horizontal-ad-banner";
import { Helmet } from "react-helmet";
import './main.scss';

export default class Main extends Component {

  componentDidMount() {
    jumpToTop();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <Helmet>
          <title>Designtalk - цифровое издание о дизайне пространства.</title>
          <meta name="description" content="Designtalk - БЛОГ О ДИЗАЙНЕ пространства. Наша миссия вдохновлять и популяризировать качественный ДИЗАЙН ИНТЕРЬЕРА." />
          <meta name="keywords" content="блог о дизайне интерьера, блог дизайн интерьера, пуфик блог о дизайне интерьера, архитектура, дизайн, интерьер" />
          <link rel="canonical" href="https://designtalk.ru/" />

          <meta name="og:title" content="Designtalk - цифровое издание о дизайне пространства." />
          <meta property="og:title" content="Designtalk - цифровое издание о дизайне пространства." />
          <meta name="og:description" content="Designtalk - БЛОГ О ДИЗАЙНЕ пространства. Наша миссия вдохновлять и популяризировать качественный ДИЗАЙН ИНТЕРЬЕРА." />
          <meta property="og:description" content="Designtalk - БЛОГ О ДИЗАЙНЕ пространства. Наша миссия вдохновлять и популяризировать качественный ДИЗАЙН ИНТЕРЬЕРА." />
          <meta name="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:type" content="website" />
          <meta name="og:url" content="https://designtalk.ru/" />
          <meta property="og:url" content="https://designtalk.ru/" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <LastArticlesContainer />
        <HorizontalAdBanner />
        <ArticleListContainer />
        <ShowMoreArticles />
        <Subscribe />
        <PopularList />
      </AbsoluteWrapper>
    );
  }
}