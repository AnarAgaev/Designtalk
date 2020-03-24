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
    this.props.fetchData();
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { blogService } = ownProps;

  return {
    fetchData: () => {
      dispatch(dataRequested());

      blogService.getArticles()
        .then((response) => {
          dispatch(articlesLoaded(response));
        })
        .catch((error) => {
          dispatch(hasError(error));
        });
    }
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleList);