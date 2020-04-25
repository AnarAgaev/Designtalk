import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import LastRubricArticle from "./last-rubric-article";
import { compose } from "../../utils";
import { fetchLastRubricArticle, handleRubricTitleHover } from "../../actions";

class LastRubricArticleContainer extends Component {

  componentDidMount() {
    const {
      fetchLastRubricArticle,
      rubric } = this.props;

    fetchLastRubricArticle(rubric);
  }

  render() {
    const {
      article = undefined,
      rubricTitle,
      isTitleHover,
      handleTitleHover,
      error,
      notFound
    } = this.props;

    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    if (notFound) {
      return <Redirect to="/page-not-found" />;
    } else {
      return (
        <LastRubricArticle
          article={ article }
          rubricTitle={ rubricTitle }
          isTitleHover={ isTitleHover }
          handleTitleHover={ handleTitleHover } />
      );
    }
  }
}

const mapStateToProps = ({
  lastRubricArticle: {
    article,
    rubricTitle,
    isTitleHover,
    error,
    notFound
  }}) => {

  return {
    article,
    rubricTitle,
    isTitleHover,
    error,
    notFound
  };
};

const mapDispatchToProps = (
    dispatch, { blogService }
  ) => {

  return {
    fetchLastRubricArticle: (rubricId) =>
      fetchLastRubricArticle(dispatch, blogService, rubricId),

    handleTitleHover: (event = true) =>
      handleRubricTitleHover(dispatch, event)
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LastRubricArticleContainer);