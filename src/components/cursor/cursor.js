import React from "react";
import { connect } from "react-redux";
import './cursor.scss';

const Cursor = ({ visible, X, Y }) => {

  const clazz = visible
    ? 'cursor visible'
    : 'cursor';

  return (
    <div
      style={{ left: X, top: Y }}
      className={ clazz } />
  );
};

const mapStateToProps = ({ cursorOnImg : {
    cursorVisible,
    cursorX,
    cursorY
  }}) => {

  return {
    visible: cursorVisible,
    X: cursorX,
    Y: cursorY
  };
};

export default connect(
  mapStateToProps
)(Cursor);