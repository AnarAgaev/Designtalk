import React from "react";
import { renderElementList } from "../../utils";
import "./socials-list.scss";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faVk, faOdnoklassniki, faTwitter, faTelegramPlane,
         faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

const socialItems = [ faFacebookF, faInstagram, faVk, faYoutube, faOdnoklassniki,
  faTwitter, faTelegramPlane, faPinterestP ];

const SocialListItem = (item) => {
  return (
    <li className="social__item" key={ item.iconName }>
      <a className="social__link" target="_blank" rel="nofollow">
        <FontAwesomeIcon icon={ item } />
      </a>
    </li>
  );
};

const SocialList = () => {
    return (
      <ul className="social__list">
        { renderElementList(socialItems, SocialListItem) }
      </ul>
    );
};

export default SocialList;