import React from "react";
import { Container } from "react-bootstrap";
import PopularListItem from "../popular-list-item";

import './popular-list.scss';

const PopularList = ({ popularListData }) => {
  const elements = popularListData.map((item) => {
    const { id, ...itemProp } = item;
    return <PopularListItem { ...itemProp }  key={ id } />;
  });

  return (
    <div className="popular">
      <Container>
        <h3 className="popular__title">это читают больше всего</h3>
        <div className="popular__list">
          { elements }
        </div>
        <div className="popular__controls">
          <div className="btn__controls btn__left" id="popularMoveLeft" />
          <div className="btn__controls btn__right" id="popularMoveRight" />
        </div>
      </Container>
    </div>
  );
};

export default PopularList;