import React, { Component } from "react";
import { connect } from 'react-redux';
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import LastArticle from "./last-article";
import { compose } from "../../utils";
import {fetchLastArticles } from "../../actions";


class LastArticlesContainer extends Component {

  componentDidMount() {
    this.props.fetchLastArticles();
  }

  render() {
    const { article, error } = this.props;


    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    // At the moment, in the properties we pass only the first element from the list of articles.
    // When the half-article on the main page is changed to a slider, transfer the list.
    return <LastArticle article={ article[0] } />;
  }
}

const mapStateToProps = ({ lastArticles: {
  articles: article,
  error
} }) => {
  return {
    article,
    error
  };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchLastArticles: () => fetchLastArticles(dispatch, blogService),
  };
};


export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LastArticlesContainer);