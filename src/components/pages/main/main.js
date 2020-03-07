import React, { Component } from "react";
import MainPageTitle from "../../main-page-title";
import LastArticle from "../../last-article";
import ArticlesList from "../../articles-list";
import ButtonMore from "../../button-more";
import Subscribe from "../../subscribe";
import PopularList from "../../popular-list";
import './main.scss';

export default class Main extends Component {
  render() {
    const { popularListData, articlesListData, popularListPosition,
            toggleSlide, handleModalShow, lastArticle } = this.props;

    return (
      <>
        <MainPageTitle />
        <LastArticle lastArticle={ lastArticle } />
        <ArticlesList articlesListData={ articlesListData } />
        <ButtonMore />
        <Subscribe handleModalShow={ handleModalShow } />
        <PopularList
          popularListData={ popularListData }
          popularListPosition={ popularListPosition }
          toggleSlide={ toggleSlide } />
      </>
    );
  }
}