import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Row } from "react-bootstrap";
import ArticleListItem from "../article-list-item";
import withBlogService from "../hoc";
import { compose } from "../../utils";
import { articlesLoaded } from '../../actions';
import { renderArticleList } from "../../renders";
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
    const articles = renderArticleList(this.props.articles, ArticleListItem);

    return (
      <Container>
        <Row className="article-list">
          { articles }
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ articles }) => {
  return { articles };
};

const mapDispatchToProps =  {
  articlesLoaded
};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ArticleList);