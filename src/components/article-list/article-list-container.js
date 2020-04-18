import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleListItem from "../article-list-item";
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import ArticleList from "./article-list";
import { compose, renderElementList } from "../../utils";
import { fetchArticles } from "../../actions";
import { trimArticlesHash } from "../../actions";

class ArticleListContainer extends Component {

  componentDidMount() {
    const {
      articles,
      next,
      previous,
      fetchArticles,
      trimArticles
    } = this.props;

    if (previous === null && !articles.length) {
      const url = articles.length
        ? next
        : '/articles/';

      fetchArticles(url)();
    } else {
      trimArticles('/articles/?page=2');
    }
  }

  render() {
    const { articles, error } = this.props;

    const articleList = renderElementList(
      articles,
      ArticleListItem
    );

    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    return (
      <ArticleList articles={ articleList } />
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