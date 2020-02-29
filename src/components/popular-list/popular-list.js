import React from "react";
import { Container } from "react-bootstrap";
import PopularListItem from "../popular-list-item";

import './popular-list.scss';
import LastArticle from "../last-article";

const PopularList = ({ popularListData,  handleCursorOverImg }) => {
  const elements = popularListData.map((item) => {
    const { id, ...itemProp } = item;
    return (
      <PopularListItem
        { ...itemProp }
        key={ id }
        handleCursorOverImg={ handleCursorOverImg } />
    );
  });

  return (
    <div className="popular">
      <Container>
        <h3 className="popular__title">это читают больше всего</h3>
        <div className="popular__list">
          { elements }
        </div>
        <div className="popular__controls">
          <div className="controller controller__left" />
          <div className="controller" />
        </div>
      </Container>
    </div>
  );
};

export default PopularList;