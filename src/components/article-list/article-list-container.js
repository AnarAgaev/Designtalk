import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleListItem from "../article-list-item";
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import ArticleList from "./article-list";
import { compose, renderElementList } from "../../utils";
import { fetchArticles, trimArticlesHash } from "../../actions";
import ArticleListBanner from "../article-list-banner";

class ArticleListContainer extends Component {

  componentDidMount() {
    const {
      articles,
      next,
      fetchArticles,
      trimArticles
    } = this.props;

    if (articles.length === 0) {
      const url = articles.length
        ? next
        : '/articles/';

      fetchArticles(url)();
    } else if (articles.length > 7) {
      trimArticles('/articles/?page=2');
    }
  }

  render() {
    const { articles, error } = this.props;

    const articleList = renderElementList(
      articles,
      ArticleListItem,
      'main-page'
    );

    const articlesWithAdvBanner = articles.length
      ? [ articleList[0],
          <ArticleListBanner key={'article-list-banner'}/>,
          articleList.slice(1) ]
      : null;

    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    return (
      <ArticleList
        articles={ articlesWithAdvBanner }
        articleListTitle={ 'последине публикации' }/>
    );
  }
}

const mapStateToProps = ({
    articleList: {
    next,
    previous,
    articles,
    error
  } }) => {

  return { next, previous, articles, error };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchArticles: (url) => fetchArticles(
      dispatch,
      blogService,
      url
    ),
    trimArticles: (nextPageUrl) =>
      dispatch(trimArticlesHash(nextPageUrl))
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleListContainer);