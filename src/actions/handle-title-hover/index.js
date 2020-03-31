import handleTitleOver from "./handle-title-over";
import handleTitleOut from "./handle-title-out";

const handleTitleHover = (dispatch, event) => {
  if (event) {
    dispatch(handleTitleOver());
  } else {
    dispatch(handleTitleOut());
  }
};

export default handleTitleHover;
