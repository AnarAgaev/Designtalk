import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PopularListItem from "../popular-list-item";
import Cursor from "../cursor";
import './popular-list.scss';

export default class PopularList extends Component {
  popularListRef = React.createRef();

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
      const { id, ...itemProp } = article;
      return (
        <PopularListItem
          key={ id }
          { ...itemProp }
          handleCursorOverImg={ this.handleCursorOverImg } />
      );
    });
  };

  componentDidMount() {
    console.log(this.popularListRef.current.getBoundingClientRect().right)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.popularListRef.current.getBoundingClientRect().right)
  }

  render() {
    const { popularListData, popularListPosition, toggleSlide } = this.props;
    const { cursorVisible, cursorOffsetX, cursorOffsetY } = this.state;
    const articles = this.renderArticles(popularListData);

    const onClickLeftControl = () => {
      const right = this.popularListRef.current.getBoundingClientRect().right;
      toggleSlide(1, right);
    };

    const onClickRightControl = () => {
      const right = this.popularListRef.current.getBoundingClientRect().right;
      toggleSlide(-1, right);
    };

    return (
      <div className="popular">
        <Container>
          <h3 className="popular__title">это читают больше всего</h3>
          <div className="popular__list__wrap">
            <div
              className="popular__list"
              style={{ left: popularListPosition }}
              ref={ this.popularListRef } >
              { articles }
            </div>
          </div>
          <div className="popular__controls">
            <div
              onClick={ onClickLeftControl }
              className="controller controller__left" />
            <div
              onClick={ onClickRightControl }
              className="controller" />
          </div>
        </Container>
        <Cursor
          cursorVisible = { cursorVisible }
          cursorOffsetX = { cursorOffsetX }
          cursorOffsetY = { cursorOffsetY } />
      </div>
    );
  }
};