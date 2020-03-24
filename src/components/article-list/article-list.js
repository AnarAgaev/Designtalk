import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Row } from "react-bootstrap";
import ArticleListItem from "../article-list-item";
import renderArticleList from "../../renders/render-article-list";
import withBlogService from "../hoc";
import { compose } from "../../utils";
import { articlesLoaded, dataRequested, hasError} from '../../actions';
import './article-list.scss';
import ErrorIndicator from "../error-indicator";

class ArticleList extends Component {

  componentDidMount() {
    const {
      blogService,
      articlesLoaded,
      dataRequested,
      hasError } = this.props;

    dataRequested();

    blogService.getArticles()
      .then((response) => {
        articlesLoaded(response);
      })
      .catch((error) => {
        hasError(error);
      });
  }

  render() {
    const { articles, error } = this.props;

    const articleList = renderArticleList(
      articles,
      ArticleListItem
    );

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <Container>
        <Row className="article-list">
          { articleList }
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ articles, error }) => {
  return { articles, error };
};

const mapDispatchToProps = {
  articlesLoaded,
  dataRequested,
  hasError
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleList);