import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import ArticlesListItem from "../articles-list-item";
import Cursor from "../cursor";
import ErrorBoundary from "../error-boundary";
import './articles-list.scss';

export default class ArticlesList extends Component {
  state = {
    cursorVisible: false,
    cursorOffsetX: 0,
    cursorOffsetY: 0,
  };

  handleCursorOverImg = (visible, offsetX, offsetY) => {
    const newState = !visible ?
      { cursorVisible: visible } :
      { cursorVisible: visible,
        cursorOffsetX: offsetX,
        cursorOffsetY: offsetY };

    this.setState( newState );
  };

  renderArticles = (articles) => {
    if (!articles.length) {
      return null;
    }

    return articles.map((article) => {
      const { id, ...itemProps } = article;

      return (
        <ArticlesListItem
          key={ id }
          { ...itemProps }
          handleCursorOverImg={ this.handleCursorOverImg } />
      );
    });
  };

  render() {
    const { cursorVisible, cursorOffsetX, cursorOffsetY } = this.state;
    const articles = this.renderArticles(this.props.articlesListData);

    return (
      <ErrorBoundary>
        <Container>
          <Row className="article-list">
            { articles }
          </Row>
          <Cursor
            cursorVisible = { cursorVisible }
            cursorOffsetX = { cursorOffsetX }
            cursorOffsetY = { cursorOffsetY } />
        </Container>
      </ErrorBoundary>
    );
  }
};