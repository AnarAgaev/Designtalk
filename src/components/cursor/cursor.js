import React, { Component } from "react";
import './cursor.scss';

export default class Cursor extends Component {

  render() {
    const { cursorVisible, cursorOffsetX, cursorOffsetY } = this.props;
    const className = cursorVisible ? 'cursor visible' : 'cursor';
    const cursorStyle = cursorVisible ? {
        left: cursorOffsetX,
        top: cursorOffsetY
      } : {};

    return <div style={ cursorStyle } className={ className } />
  }
}