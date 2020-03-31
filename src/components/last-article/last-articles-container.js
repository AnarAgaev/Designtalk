import React, { Component } from "react";
import { connect } from 'react-redux';
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import LastArticle from "./last-article";
import { compose } from "../../utils";
import {
  fetchLastArticles,
  handleTitleHover
} from "../../actions";

class LastArticlesContainer extends Component {

  componentDidMount() {
    this.props.fetchLastArticles();
  }

  render() {
    const {
      articles,
      isTitleHover,
      error,
      handleTitleHover
    } = this.props;

    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    // At the moment, in the properties we pass only the first element from the list of articles.
    // When the half-article on the main page is changed to a slider, transfer the list.
    return <LastArticle
      articles={ articles[0] }
      isTitleHover={ isTitleHover }
      handleTitleHover={ handleTitleHover } />;
  }
}

const mapStateToProps = ({ lastArticles: {
  articles, isTitleHover, error
}}) => {
  return { articles, isTitleHover, error };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchLastArticles: () => fetchLastArticles(dispatch, blogService),
    handleTitleHover: (event = true) => handleTitleHover(dispatch, event)
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LastArticlesContainer);