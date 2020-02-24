import React, { Component } from "react";

import "./nav.scss"

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li><a>о нас</a></li>
          <li><a>опубликовать проект</a></li>
          <li><a>контакты</a></li>
          <li><a>рекламодателям</a></li>
        </ul>
      </nav>
    )
  }
}