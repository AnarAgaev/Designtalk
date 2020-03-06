import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PopularListItem from "../popular-list-item";
import './popular-list.scss';

export default class PopularList extends Component {
  popularListRef = React.createRef();

  render() {
    const { popularListData,
      handleCursorOverImg,
      popularListPosition,
      toggleSlide } = this.props;

    const elements = popularListData.map((item) => {
      const { id, ...itemProp } = item;
      return (
        <PopularListItem
          { ...itemProp }
          key={ id }
          handleCursorOverImg={ handleCursorOverImg } />
      );
    });

    console.log(popularListData)

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
              { elements }
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
      </div>
    );
  }
};