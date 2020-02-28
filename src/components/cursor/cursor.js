import React, { Component } from "react";
import './cursor.scss';

export default class Cursor extends Component {
  state = {
    visible: false,
    top: 0,
    left: 0
  };

  render() {
    const { visible, top, left } = this.state;

    let className = 'cursor';

    if(visible) {
      className += ' visible';
    }

    return <div className={ className } />
  }
}