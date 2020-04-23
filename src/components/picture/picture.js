import React from "react";
import { connect } from 'react-redux';
import { handleCursorOverImg } from "../../actions";
import './picture.sass';

const Picture = ({ url, cursorOverImg, cursorOutImg }) => {

  const onMouseMoveImg = (event) => {
    const { clientX, clientY } = event;
    cursorOverImg(true, clientX, clientY);
  };

  return (
    <div onMouseOut={ () => cursorOutImg() }
         onMouseMove={ onMouseMoveImg }>

      <div style={{ backgroundImage: `url(${ url })` }}
           className={ 'padding-huck cross-cursor' }  />

    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    cursorOverImg: (visible, X, Y) =>
      handleCursorOverImg(dispatch, visible, X, Y),
    cursorOutImg: () =>
      handleCursorOverImg(dispatch, false)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Picture);