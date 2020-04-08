import React, { Component } from "react";
import LastArticlesContainer from "../../last-article";
import ArticleList from "../../article-list";
import ButtonMore from "../../button-more";
import PopularList from "../../popular-list";
import SubscribeContainer from "../../subscribe";
import { jumpToTop } from "../../../utils";
import './main.scss';

export default class Main extends Component {

  componentDidMount() {
    jumpToTop();
  }

  render() {
    return (
      <>
        <LastArticlesContainer />
        <ArticleList />
        <ButtonMore />
        <SubscribeContainer />
        <PopularList />
      </>
    );
  }
}