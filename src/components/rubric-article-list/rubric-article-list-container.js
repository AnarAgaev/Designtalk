import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleListItem from "../article-list-item";
import ArticleList from "../article-list/article-list";
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import { compose, renderElementList } from "../../utils";
import { fetchRubricArticles } from "../../actions";
import ArticleListBanner from "../article-list-banner";

class RubricArticleListContainer extends Component {

  componentDidMount() {
    const {
      articles,
      next,
      rubric,
      fetchRubricArticles
    } = this.props;

    const url = articles.length
      ? next
      : '/rubric-articles/?rubric=' + rubric;

    fetchRubricArticles(url)();
  }

  render() {
    const { rubricName, articles, error } = this.props;

    const articleList = renderElementList (
      articles,
      ArticleListItem,
      'rubric-page'
    );

    const articlesWithAdvBanner = articles.length
      ? [ articleList[0],
        <ArticleListBanner key={'article-list-banner'} />,
        articleList.slice(1) ]
      : null;

    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    return (
      <ArticleList
        articles={ articlesWithAdvBanner }
        articleListTitle={ `последине публикации в рубрике ${rubricName}` } />
    );
  }
}

const mapStateToProps = ({
  rubricArticleList: {
    next,
    rubricName,
    articles,
    error
  } }) => {

  return { next, rubricName, articles, error };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchRubricArticles: (url) =>
      fetchRubricArticles (
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
)(RubricArticleListContainer);