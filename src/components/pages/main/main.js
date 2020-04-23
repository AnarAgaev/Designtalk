import React, { Component } from "react";
import LastArticlesContainer from "../../last-article";
import ArticleListContainer from "../../article-list";
import ShowMoreArticles from "../../show-more-articles";
import PopularList from "../../popular-list";
import Subscribe from "../../subscribe";
import { jumpToTop } from "../../../utils";
import AbsoluteWrapper from "../../absolute-wrapper";
import './main.scss';

export default class Main extends Component {

  componentDidMount() {
    jumpToTop();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <LastArticlesContainer />
        <ArticleListContainer />
        <ShowMoreArticles />
        <Subscribe />
        <PopularList />
      </AbsoluteWrapper>
    );
  }
}