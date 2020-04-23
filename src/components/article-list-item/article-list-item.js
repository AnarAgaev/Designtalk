import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { showArticleItem } from "../../actions";
import { showRubricArticleItem } from "../../actions";
import { showRubricArticleListItem } from "../../actions";
import Picture from "../picture"
import listenerShowArticleListItems from "./listener-show-article-list-item";
import './article-list-item.scss';

class ArticleListItem extends Component {
  articleNode = React.createRef();

  componentDidMount() {
    const {
      showRubricArticleItem,
      showArticleItem,
      showRubricArticleListItem,
      payload
    } = this.props;

    const node = this.articleNode.current;

    const getShowFunc = (payload) => {
      switch(payload) {
        case 'main-page':
          return showArticleItem;

        case 'rubric-page':
          return showRubricArticleItem;

        case 'article-page':
          return showRubricArticleListItem;

        default:
          return;
      }
    };
    const showFunc = getShowFunc(payload);

    listenerShowArticleListItems(
      node,
      showFunc
    );

    window.addEventListener('scroll',
      () => listenerShowArticleListItems(
        node,
        showFunc
      ),
      true
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',
      listenerShowArticleListItems);
  }

  render() {
    const { id, url, rubric, title, picture, visible, payload } = this.props;
    const urlImage = `https://designtalk.ru/images/${picture}`;
    const urlRubric = `/rubrics/${rubric.link}`;

    let clazz = visible
      ? "article-list__item visible"
      : "article-list__item";

    if (payload) clazz += ` ${payload}`;

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
    showArticleItem: (itemId) =>
      showArticleItem(dispatch, itemId),

    showRubricArticleItem: (itemId) =>
      showRubricArticleItem(dispatch, itemId),

    showRubricArticleListItem: (itemId) =>
      showRubricArticleListItem(dispatch, itemId)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(ArticleListItem);