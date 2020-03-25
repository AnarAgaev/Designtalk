import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { fetchArticlesFailure } from '../../actions';

class ErrorBoundary extends Component {

  componentDidCatch(error, errorInfo) {
    fetchArticlesFailure(error);
  }

  render() {
    const { articlesError } = this.props;

    if (articlesError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

const mapStateToProps = ({
  articleList: { error: articlesError }
}) => {

  return {
    articlesError
  };
};

const mapDispatchToProps = { loadingError: fetchArticlesFailure };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundary);