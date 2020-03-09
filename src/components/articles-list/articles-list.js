import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import ArticlesListItem from "../articles-list-item";
import Cursor from "../cursor";
import './articles-list.scss';

export default class ArticlesList extends Component {
  state = {
    cursorVisible: false,
    cursorOffsetX: 0,
    cursorOffsetY: 0,
  };

  handleCursorOverImg = (visible = false, offsetX = 0, offsetY = 0) => {
    this.setState({
      cursorVisible: visible,
      cursorOffsetX: offsetX,
      cursorOffsetY: offsetY
    })
  };

  renderArticles = (articles) => {
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
      <Container>
        <Row className="article-list">
          { articles }
        </Row>
        <Cursor
          cursorVisible = { cursorVisible }
          cursorOffsetX = { cursorOffsetX }
          cursorOffsetY = { cursorOffsetY } />
      </Container>
    );
  }
};