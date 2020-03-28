import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import {
  fetchArticlesFailure,
  fetchPopularFailure
} from '../../actions';

class ErrorBoundary extends Component {

  componentDidCatch(error, errorInfo) {
    fetchArticlesFailure(error);
    fetchPopularFailure(error);
  }

  render() {
    const { articlesError, popularError } = this.props;

    if (articlesError || popularError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

const mapStateToProps = ({
    articleList: { error: articlesError },
    popularList: { error: popularError }
  }) => {

  return {
    articlesError,
    popularError
  };
};

const mapDispatchToProps = {
  fetchArticlesFailure,
  fetchPopularFailure
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundary);