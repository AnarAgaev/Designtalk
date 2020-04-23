import React, { Component } from "react";
import { connect } from 'react-redux';
import withBlogService from "../../hoc";
import ErrorIndicator from "../../error-indicator";
import { compose } from "../../../utils";
import { fetchArticle } from "../../../actions";
import Article from "./article";

class ArticleContainer extends Component {
  componentDidMount() {
    const {
      fetchArticle,
      url
    } = this.props;

    fetchArticle(url)();
  }

  render() {
    const { article } = this.props;
    const error = article.error;

    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    return (
      <Article article={ article } />
    );
  }
}

const mapStateToProps = ({ article }) => {
  return { article };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchArticle: (url) =>
      fetchArticle(dispatch, blogService, url),
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleContainer);