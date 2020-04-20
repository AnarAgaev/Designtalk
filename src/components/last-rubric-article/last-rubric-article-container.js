import React, { Component } from "react";
import { connect } from 'react-redux';
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
      error
    } = this.props;

    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    return (
      <LastRubricArticle
        article={ article }
        rubricTitle={ rubricTitle }
        isTitleHover={ isTitleHover }
        handleTitleHover={ handleTitleHover } />
    );
  }
}

const mapStateToProps = ({
  lastRubricArticle: {
    article,
    rubricTitle,
    isTitleHover,
    error
  }}) => {

  return {
    article,
    rubricTitle,
    isTitleHover,
    error
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