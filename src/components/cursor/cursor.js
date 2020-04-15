import React from "react";
import './cursor.scss';

const Cursor = ({ visible, X, Y }) => {

  const clazz = visible
    ? 'cursor visible'
    : 'cursor';

  const style = visible
    ? { left: X, top: Y }
    : {};

  return <div
    className={ clazz }
    style={ style } />
};

export default Cursor;