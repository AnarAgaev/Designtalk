import React from "react";
import { Link } from "react-router-dom";
import './privacy-list.scss';

const PrivacyList = () => {
  return (
    <ul className="privacy__list">
      <li className="privacy__item">
        <Link to="/policy-personal-data" className="privacy__link">политика обработки персональных данных</Link>
      </li>
      <li className="privacy__item">
        <Link to="/privacy-policy" className="privacy__link">политика конфиденциальности</Link>
      </li>
      <li className="privacy__item">
        <Link to="/cookie-policy" className="privacy__link">политика использования файлов cookie</Link>
      </li>
    </ul>
  );
};

export default PrivacyList;