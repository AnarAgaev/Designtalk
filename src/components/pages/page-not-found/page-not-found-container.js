import React, { Component } from "react";
import { jumpToTop } from "../../../utils";
import { connect } from "react-redux";
import PageNotFound from "./page-not-found";
import {
  resetRedirectToNotFound,
  resetRedirectToNotFoundAtRubric,
  resetRedirectToNotFoundAtRubricList
} from "../../../actions";

class PageNotFoundContainer extends Component {

  /*
   * At the componentDidMount we will reset Not Found
   * parameters for pages in the all directories.
  */
  componentDidMount() {
    jumpToTop();

    const {
      resetRedirectToNotFound, articleNotFound,

      resetRedirectToNotFoundAtRubric, lastRubricArticle,

      resetRedirectToNotFoundAtRubricList, rubricArticleList
    } = this.props;

    if (articleNotFound) {
      resetRedirectToNotFound();
    }

    if (lastRubricArticle) {
      resetRedirectToNotFoundAtRubric();
    }

    if (rubricArticleList) {
      resetRedirectToNotFoundAtRubricList();
    }
  }

  render() {
    return <PageNotFound />;
  }
}

const mapStateToProps = ({
    article, lastRubricArticle, rubricArticleList
  }) => {

  return {
    articleNotFound: article.notFound,
    lastRubricArticle: lastRubricArticle.notFound,
    rubricArticleList: rubricArticleList.notFound
  };
};

const mapDispatchToProps = {
  resetRedirectToNotFound,
  resetRedirectToNotFoundAtRubric,
  resetRedirectToNotFoundAtRubricList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNotFoundContainer);