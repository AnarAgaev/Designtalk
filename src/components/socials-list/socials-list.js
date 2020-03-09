import React, { Component } from "react";
import "./socials-list.scss";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faVk, faOdnoklassniki, faTwitter, faTelegramPlane,
         faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default class SocialList extends Component {
  socialItems = [ faFacebookF, faInstagram, faVk, faYoutube, faOdnoklassniki,
                  faTwitter, faTelegramPlane, faPinterestP ];

  renderSocialItems = () => {
    return this.socialItems.map((item) => {
      return (
        <li className="social__item">
          <a className="social__link" target="_blank" rel="nofollow">
            <FontAwesomeIcon icon={ item } />
          </a>
        </li>
      );
    });
  };

  render() {
    const elements = this.renderSocialItems();

    return (
      <ul className="social__list">
        { elements }
      </ul>
    );
  }
};