import React from "react";
import { connect } from 'react-redux';
import Spinner from "./spinner";

const SpinnerContainer = ({ loading }) => {

  const clazz = loading
    ? 'spinner visible'
    : 'spinner';

  return <Spinner clazz={ clazz } />;
};

const mapStateToProps = (state) => {
  const {
    articleList: { loading: articlesLoading },
    popularList: { loading: popularLoading },
    lastArticles: { loading: lastArticlesLoading },
    lastRubricArticle: { loading: lastRubricArticlesLoading },
    sendForm: { loading: sendFormLoading }
  } = state;

  return {
    loading: articlesLoading
      || popularLoading
      || lastArticlesLoading
      || sendFormLoading
      || lastRubricArticlesLoading
  };
};

export default connect(
  mapStateToProps
)(SpinnerContainer);