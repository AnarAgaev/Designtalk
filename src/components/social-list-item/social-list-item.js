import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./social-list-item.scss";

const SocialListItem = ({ icon }) => {
  return (
    <li className="social__item">
      <a
        href={`http://${icon.iconName}`}
        className="social__link"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <FontAwesomeIcon icon={ icon } />
      </a>
    </li>
  );
};

export default SocialListItem;