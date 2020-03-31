import React, { Component } from "react";
import LastArticlesContainer from "../../last-article";
import ArticleList from "../../article-list";
import ButtonMore from "../../button-more";
import PopularList from "../../popular-list";
import SubscribeContainer from "../../subscribe";
import './main.scss';

export default class Main extends Component {
  render() {
    // const { handleModalShow } = this.props;

    return (
      <>
        <LastArticlesContainer />
        <ArticleList />
        <ButtonMore />
        {/*<Subscribe handleModalShow={ handleModalShow } />*/}
        <SubscribeContainer />
        <PopularList />
      </>
    );
  }
}