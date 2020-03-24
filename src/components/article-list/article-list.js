import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Row } from "react-bootstrap";
import ArticleListItem from "../article-list-item";
import withBlogService from "../hoc";
import { compose, renderElementList } from "../../utils";
import { fetchArticles } from '../../actions';
import './article-list.scss';
import ErrorIndicator from "../error-indicator";

class ArticleList extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { articles, error } = this.props;

    const articleList = renderElementList(
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

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchData: fetchArticles(blogService, dispatch)
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleList);