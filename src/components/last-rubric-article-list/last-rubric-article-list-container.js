import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleListItem from "../article-list-item";
import ArticleList from "../article-list/article-list";
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import { compose, renderElementList } from "../../utils";
import { fetchLastRubricArticleList } from "../../actions";

class LastRubricArticleListContainer extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { rubric, fetchArticles } = this.props;

    if (rubric && rubric !== prevProps.rubric) {
      fetchArticles(rubric)
    }
  }

  render() {
    const { articles, error } = this.props;

    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    if (articles.length) {
      const articleList = renderElementList (
        articles,
        ArticleListItem,
        'article-page'
      );

      return (
        <ArticleList
          articles={ articleList }
          articleListTitle={ "с этой статьёй также читают" }
          parentClass={ "article-page" } />
      );
    }

    // If there isn't articles at the selected rubric, don't show ArticleList component
    return null;
  }
}

const mapStateToProps = ({
  lastRubricArticleList: {
    articles,
    error
  } }) => {
  return { articles, error };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchArticles: (rubric) =>
      fetchLastRubricArticleList( dispatch, blogService, rubric ),
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LastRubricArticleListContainer);