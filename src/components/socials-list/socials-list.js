import React, { Component } from "react";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF, faInstagram, faVk,
  faOdnoklassniki, faTwitter, faTelegramPlane,
  faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./socials-list.scss";

export default class SocialList extends Component {
  render() {
    return (
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" target="_blank" rel="nofollow">
            <FontAwesomeIcon icon={ faFacebookF } /></a></li>
        <li className="social-list__item">
          <a className="social-list__link" target="_blank" rel="nofollow">
            <FontAwesomeIcon icon={ faInstagram } /></a></li>
        <li className="social-list__item">
          <a className="social-list__link" target="_blank" rel="nofollow">
            <FontAwesomeIcon icon={ faVk } /></a></li>
        <li className="social-list__item">
          <a className="social-list__link" target="_blank" rel="nofollow">
            <FontAwesomeIcon icon={ faOdnoklassniki } /></a></li>
        <li className="social-list__item">
          <a className="social-list__link" target="_blank" rel="nofollow">
            <FontAwesomeIcon icon={ faTwitter } /></a></li>
        <li className="social-list__item">
          <a className="social-list__link" target="_blank" rel="nofollow">
            <FontAwesomeIcon icon={ faTelegramPlane } /></a></li>
        <li className="social-list__item">
          <a className="social-list__link" target="_blank" rel="nofollow">
            <FontAwesomeIcon icon={ faPinterestP } /></a></li>
        <li className="social-list__item">
          <a className="social-list__link" target="_blank" rel="nofollow">
            <FontAwesomeIcon icon={ faYoutube } /></a></li>
      </ul>
    )
  }
}