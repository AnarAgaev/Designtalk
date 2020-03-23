import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Row } from "react-bootstrap";
import ArticleListItem from "../article-list-item";
import renderArticleList from "../../renders/render-article-list";
import withBlogService from "../hoc";
import { compose } from "../../utils";
import { articlesLoaded } from '../../actions';
import './article-list.scss';

class ArticleList extends Component {

  componentDidMount() {
    const { blogService } = this.props;
    const data = blogService.getArticles();

    data.then((response) => {
      this.props.articlesLoaded(response);
    });
  }

  render() {
    const { articles } =  this.props;
    const articleList = renderArticleList(
      articles,
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
  articlesLoaded
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleList);