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
    this.props.fetchData();
  }

  render() {
    const { articles, error } = this.props;

    const articleList = renderElementList(
      articles,
      ArticleListItem
    );

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ArticleList articles={articleList} />
    );
  }
}

const mapStateToProps = ({ articles, error }) => {
  return { articles, error };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchData: fetchArticles(blogService, dispatch)
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleListContainer);