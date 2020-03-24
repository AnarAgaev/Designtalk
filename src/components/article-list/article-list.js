import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Row } from "react-bootstrap";
import ArticleListItem from "../article-list-item";
import renderArticleList from "../../renders/render-article-list";
import withBlogService from "../hoc";
import { compose } from "../../utils";
import { articlesLoaded, dataRequested } from '../../actions';
import './article-list.scss';

class ArticleList extends Component {

  componentDidMount() {
    const {
      blogService,
      articlesLoaded,
      dataRequested } = this.props;

    dataRequested();

    blogService.getArticles()
      .then((response) => {
        articlesLoaded(response);
      });
  }

  render() {
    const articleList = renderArticleList(
      this.props.articles,
      ArticleListItem
    );

    return (
      <Container>
        <Row className="article-list">
          { articleList }
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ articles }) => {
  return { articles };
};

const mapDispatchToProps = {
  articlesLoaded,
  dataRequested
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleList);