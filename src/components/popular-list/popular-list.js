import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PopularListItem from "../popular-list-item";
import renderArticleList from "../../renders/render-article-list";
import './popular-list.scss';

export default class PopularList extends Component {
  popularListRef = React.createRef();

  onClickLeftControl = () => {
    const right = this.popularListRef.current.getBoundingClientRect().right;
    this.props.toggleSlide(1, right);
  };

  onClickRightControl = () => {
    const right = this.popularListRef.current.getBoundingClientRect().right;
    this.props.toggleSlide(-1, right);
  };

  render() {
    const { popularListData, popularListPosition } = this.props;
    const articles = renderArticleList(popularListData, PopularListItem);

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
              onClick={ this.onClickLeftControl }
              className="controller controller__left" />
            <div
              onClick={ this.onClickRightControl }
              className="controller" />
          </div>
        </Container>
      </div>
    );
  }
};