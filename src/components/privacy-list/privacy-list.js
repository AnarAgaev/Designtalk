import React, {Component} from "react";

import './privacy-list.scss';

export default class PrivacyList extends Component {
  render() {
    return (
      <ul className="privacy__list">
        <li className="privacy__item">
          <a href="/" className="privacy__link">политика обработки персональных данных</a>
        </li>
        <li className="privacy__item">
          <a href="/" className="privacy__link">политика конфиденциальности</a>
        </li>
        <li className="privacy__item">
          <a href="/" className="privacy__link">политика использования файлов cookie</a>
        </li>
      </ul>
    );
  }
}