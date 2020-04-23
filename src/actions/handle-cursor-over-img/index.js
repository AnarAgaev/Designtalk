import cursorOverImg from "./cursor-over-img";
import cursorOutImg from "./cursor-out-img";

const handleCursorOverImg = (dispatch, visible, X, Y) => {

  visible
    ? dispatch(cursorOverImg(X, Y))
    : dispatch(cursorOutImg());
};

export default handleCursorOverImg;