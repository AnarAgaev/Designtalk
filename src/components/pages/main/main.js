import React, { Component } from "react";
import LastArticle from "../../last-article";
import ArticlesList from "../../articles-list";
import ButtonMore from "../../button-more";
import Subscribe from "../../subscribe";
import PopularList from "../../popular-list";
import './main.scss';

export default class Main extends Component {
  render() {
    const { popularListData, articlesListData, popularListPosition,
            toggleSlide, handleModalShow, lastArticle, getNexPage,
            nextPage } = this.props;

    return (
      <>
        <LastArticle lastArticle={ lastArticle } />
        <ArticlesList articlesListData={ articlesListData } />
        <ButtonMore getNexPage={ getNexPage } nextPage={ nextPage } />
        <Subscribe handleModalShow={ handleModalShow } />
        <PopularList
          popularListData={ popularListData }
          popularListPosition={ popularListPosition }
          toggleSlide={ toggleSlide } />
      </>
    );
  }
}