import React, { Component } from "react";
import { connect } from 'react-redux';
import ArticleListItem from "../article-list-item";
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import ArticleList from "./article-list";
import { compose, renderElementList } from "../../utils";
import { fetchArticles } from '../../actions';

class ArticleListContainer extends Component {

  componentDidMount() {
    const {
      articles,
      next,
      fetchArticles } = this.props;


    const url = articles.length ?
      next : '/articles/';

    fetchArticles(url)();
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
      <ArticleList articles={articleList} />
    );
  }
}

const mapStateToProps = ({ articleList: { next, articles, error } }) => {
  return { next, articles, error };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchArticles: (url) => fetchArticles(
      dispatch,
      blogService,
      url
    )
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleListContainer);