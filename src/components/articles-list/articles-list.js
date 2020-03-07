import React, { Component } from "react";

import './articles-list.scss';
import { Container, Row } from "react-bootstrap";
import ArticlesListItem from "../articles-list-item";
import Cursor from "../cursor";

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

  render() {
    const { cursorVisible, cursorOffsetX, cursorOffsetY } = this.state;

    const  elements = this.props.articlesListData.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <ArticlesListItem
          key={ id }
          { ...itemProps }
          handleCursorOverImg={ this.handleCursorOverImg } />
      );
    });

    return (
      <Container>
        <Row className="article-list">
          { elements }
        </Row>
        <Cursor
          cursorVisible = { cursorVisible }
          cursorOffsetX = { cursorOffsetX }
          cursorOffsetY = { cursorOffsetY } />
      </Container>
    );
  }
};