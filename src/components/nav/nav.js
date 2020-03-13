import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link className="nav__link" to="/about/">о нас</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/publish-project/">опубликовать проект</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/contacts/">контакты</Link></li>
        <li className="nav__item"><Link className="nav__link" to="/for-advertisers/">рекламодателям</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;