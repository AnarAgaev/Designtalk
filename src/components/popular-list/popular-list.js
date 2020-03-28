import React from "react";
import { Container } from "react-bootstrap";
import './popular-list.scss';

const PopularList = ({ articles, currentPosition, itemWidth, toggleSlide }) => {

  const popularListRef = React.createRef();
  const windowWidth = window.innerWidth;

  const onClickLeftControl = () => {
    const position = popularListRef.current.getBoundingClientRect().right;

    // pass parameters currentPosition, itemWidth and windowWidth
    // to save the reducer as a pure function
    toggleSlide(1, position, currentPosition, itemWidth, windowWidth);
  };

  const onClickRightControl = () => {
    const position = popularListRef.current.getBoundingClientRect().right;

    // pass parameters currentPosition, itemWidth and windowWidth
    // to save the reducer as a pure function
    toggleSlide(-1, position, currentPosition, itemWidth, windowWidth);
  };

  return (
    <div className="popular">
      <Container>
        <h3 className="popular__title">это читают больше всего</h3>
        <div className="popular__list__wrap">
          <div
            className="popular__list"
            style={{ left: currentPosition }}
            ref={ popularListRef } >
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
    </div>
  );
};

export default PopularList;