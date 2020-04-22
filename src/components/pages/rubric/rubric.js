import React, { Component } from "react";
import LastRubricArticleContainer from "../../last-rubric-article";
import RubricArticleListContainer from "../../rubric-article-list";
import ShowMoreRubricArticles from "../../show-more-rubric-articles";
import { resetRubricArticlesData } from "../../../actions/";
import { connect } from "react-redux";
import { jumpToTop } from "../../../utils";
import Subscribe from "../../subscribe";
import "./rubric.scss";

class Rubric extends Component {

  componentDidMount() {
    jumpToTop();
  }

  componentWillUnmount() {
    this.props.resetRubricArticlesData();
  }

  render() {
    const { rubric } = this.props;
    return (
      <>
        <LastRubricArticleContainer
          rubric={ rubric } />

        <RubricArticleListContainer
          rubric={ rubric } />

        <ShowMoreRubricArticles />
        <Subscribe />
      </>
    );
  }
}

const mapDispatchToProps = {
  resetRubricArticlesData
};

export default connect(
  undefined,
  mapDispatchToProps
)(Rubric);