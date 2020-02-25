import React, { Component } from "react";

import "./nav.scss"

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a className="nav__link" href="/about">о нас</a></li>
          <li className="nav__item"><a className="nav__link" href="/publish-project">опубликовать проект</a></li>
          <li className="nav__item"><a className="nav__link" href="/contacts">контакты</a></li>
          <li className="nav__item"><a className="nav__link" href="/for-advertisers">рекламодателям</a></li>
        </ul>
      </nav>
    )
  }
}