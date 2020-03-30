import React, { Component } from "react";
import LastArticlesContainer from "../../last-article";
import ArticleList from "../../article-list";
import ButtonMore from "../../button-more";
import Subscribe from "../../subscribe";
import PopularList from "../../popular-list";
import './main.scss';

export default class Main extends Component {
  render() {
    const { handleModalShow } = this.props;

    return (
      <>
        <LastArticlesContainer />
        <ArticleList />
        <ButtonMore />
        <Subscribe handleModalShow={ handleModalShow } />
        <PopularList />
      </>
    );
  }
}