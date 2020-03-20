import React, { Component } from "react";
import LastArticle from "../../last-article";
import ArticleList from "../../article-list";
import ButtonMore from "../../button-more";
import Subscribe from "../../subscribe";
import PopularList from "../../popular-list";
import ErrorBoundary from "../../error-boundary";
import './main.scss';

export default class Main extends Component {
  render() {
    const { popularListData, popularListPosition,
            toggleSlide, handleModalShow, lastArticle, getNexPage,
            nextPage } = this.props;

    return (
      <ErrorBoundary>
        <LastArticle lastArticle={ lastArticle } />
        <ArticleList />
        <ButtonMore getNexPage={ getNexPage } nextPage={ nextPage } />
        <Subscribe handleModalShow={ handleModalShow } />
        <PopularList
          popularListData={ popularListData }
          popularListPosition={ popularListPosition }
          toggleSlide={ toggleSlide } />
      </ErrorBoundary>
    );
  }
}