import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { fetchArticlesFailure } from '../../actions';

class ErrorBoundary extends Component {

  componentDidCatch(error, errorInfo) {
    fetchArticlesFailure(error);
  }

  render() {
    if (this.props.error) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

const mapStateToProps = ({ error }) => {
  return { error };
};

const mapDispatchToProps = { loadingError: fetchArticlesFailure };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundary);