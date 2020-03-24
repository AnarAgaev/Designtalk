import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { hasError } from '../../actions';

class ErrorBoundary extends Component {

  componentDidCatch(error, errorInfo) {
    hasError(error);
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

const mapDispatchToProps = { loadingError: hasError };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundary);