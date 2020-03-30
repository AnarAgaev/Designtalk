import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import {
  fetchArticlesFailure,
  fetchPopularFailure,
  fetchLastArticlesFailure
} from '../../actions';

class ErrorBoundary extends Component {

  componentDidCatch(error, errorInfo) {
    fetchArticlesFailure(error);
    fetchPopularFailure(error);
    fetchLastArticlesFailure(error)
  }

  render() {
    const {
      articlesError,
      popularError,
      lastArticlesError
    } = this.props;

    if (articlesError || popularError || lastArticlesError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

const mapStateToProps = ({
    articleList: { error: articlesError },
    popularList: { error: popularError },
    lastArticles: { error: lastArticlesError },
  }) => {

  return {
    articlesError,
    popularError,
    lastArticlesError
  };
};

const mapDispatchToProps = {
  fetchArticlesFailure,
  fetchPopularFailure,
  fetchLastArticlesFailure
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundary);