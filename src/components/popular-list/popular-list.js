import React from "react";
import { Container } from "react-bootstrap";
import './popular-list.scss';

const PopularList = ({ articles, popularListPosition }) => {
  const popularListRef = React.createRef();

  const onClickLeftControl = () => {
    const right = popularListRef.current.getBoundingClientRect().right;
    this.props.toggleSlide(1, right);
  };

  const onClickRightControl = () => {
    const right = popularListRef.current.getBoundingClientRect().right;
    this.props.toggleSlide(-1, right);
  };


    return (
      <div className="popular">
        <Container>
          <h3 className="popular__title">это читают больше всего</h3>
          <div className="popular__list__wrap">
            <div
              className="popular__list"
              style={{ left: popularListPosition }}
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