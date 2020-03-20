import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Row } from "react-bootstrap";
import ArticleListItem from "../article-list-item";
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

  renderArticles = (articles) => {
    if (!articles.length) {
      return null;
    }

    return articles.map((article) => {
      const { id, ...itemProps } = article;

      return (
        <ArticleListItem
          key={ id }
          { ...itemProps } />
      );
    });
  };

  render() {
    const articles = this.renderArticles(this.props.articles);
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