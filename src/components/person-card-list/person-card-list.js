import React from "react";
import PersonCardItem from "../person-card-item";
import { renderElementList } from "../../utils";
import "./person-card-list.scss";

const PersonCardList = ({ cardList }) => {

  const persons = renderElementList(
    cardList,
    PersonCardItem
  );

  return (
    <ul className="person-card__list">
      { persons }
    </ul>
  );
};

export default PersonCardList;