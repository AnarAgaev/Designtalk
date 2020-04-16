import React from "react";
import "./person-card-item.scss";

const PersonCardItem = ({
    position,
    name,
    email
  }) => {

  return (
    <li className="person-card__item">
      <span className="person-card__position">
        { position }
      </span>
      <span className="person-card__name">
        { name }
      </span>
      <a className="person-card__email link"
          href={ `mailto:${email}@designtalk.ru` } >
        { `${email}@designtalk.ru` }
      </a>
    </li>
  );
};

export default PersonCardItem;