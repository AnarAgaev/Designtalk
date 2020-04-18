import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { showArticleItem } from "../../actions";
import Picture from "../picture"
import listenerShowArticleListItems from "./listener-show-article-list-item";
import './article-list-item.scss';

class ArticleListItem extends Component {
  articleNode = React.createRef();

  componentDidMount() {
    const { visible, showItem } = this.props;
    const node = this.articleNode.current;

    listenerShowArticleListItems(
      node,
      showItem,
    );

    if (!visible) {
      window.addEventListener('scroll',
        () => listenerShowArticleListItems(
          node,
          showItem,
        ),
        true
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',
      listenerShowArticleListItems);
  }

  render() {
    const { id, url, rubric, title, picture, visible } = this.props;
    const urlImage = `https://designtalk.ru/images/${picture}`;
    const urlRubric = `/articles/?filer=true&rubric=${rubric.url}`;

    const clazz = visible
      ? "article-list__item visible"
      : "article-list__item";

    return (
      <Col
        ref={ this.articleNode }
        className={ clazz }
        id={id} lg={6} >
        <Link
          to={ `/articles/${url}` }
          className="article-list__picture">
          <Picture url={ urlImage } />
        </Link>
        <Link
          to={ urlRubric }
          className="article-list__rubric link">
          { rubric.name }
        </Link>
        <Link
          to={ `/articles/${url}` }
          className="article-list__caption">
          <span>{ title }</span>
        </Link>
      </Col>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showItem: (itemId) =>
      showArticleItem(dispatch, itemId),
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(ArticleListItem);