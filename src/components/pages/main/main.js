import React, { Component } from "react";
import LastArticle from "../../last-article";
import ArticleList from "../../article-list";
import ButtonMore from "../../button-more";
import Subscribe from "../../subscribe";
import PopularList from "../../popular-list";
import './main.scss';

export default class Main extends Component {
  render() {
    const {
      popularListData, popularListPosition,
      toggleSlide, handleModalShow, lastArticle
    } = this.props;

    return (
      <>
        <LastArticle lastArticle={ lastArticle } />
        <ArticleList />
        <ButtonMore />
        <Subscribe handleModalShow={ handleModalShow } />
        {/*<PopularList*/}
        {/*  popularListData={ popularListData }*/}
        {/*  popularListPosition={ popularListPosition }*/}
        {/*  toggleSlide={ toggleSlide } />*/}
      </>
    );
  }
}