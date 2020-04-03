import React from "react";
import { connect } from 'react-redux';
import cursorOverImg from "../../actions/cursor-over-img";
import Cursor from "../cursor";
import './picture.sass';

const Picture = ({
  url, visible, X, Y,
  cursorOverImg }) => {

  const onMouseMoveImg = (event) => {
    const { clientX, clientY } = event;
    cursorOverImg(true, clientX, clientY);
  };

  return (
    <div onMouseOut={ cursorOverImg }
         onMouseMove={ onMouseMoveImg }>
      <div className={ 'padding-huck' }
           style={{ backgroundImage: `url(${ url })` }}
      />
      <Cursor
        visible = { visible }
        X = { X }
        Y = { Y } />
    </div>
  );
};

const mapStateToProps = ({ cursorOnImg: {
    cursorVisible: visible,
    cursorX: X,
    cursorY: Y
  }}) => {
  return { visible, X, Y };
};

const mapDispatchToProps = {
  cursorOverImg
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picture);