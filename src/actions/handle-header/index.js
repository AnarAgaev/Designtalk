import paintHeaderBack from "./paint-header-back";
import eraseHeaderBack from "./erase-header-back";
import showHeader from "./show-header";
import hideHeader from "./hide-header";

/*
* handleScroll implements functionality, the header
* changes its background and then disappears
* when the user scrolls the screen window.
*/
const headerScrollProcessing = (dispatch, scrolled, painted) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 30 && !painted) {
    dispatch(paintHeaderBack());
  }

  if (scrollHeight < 30 && painted) {
    dispatch(eraseHeaderBack());
  }

  // hide header after scrolling over 700 pixels
  if (scrollHeight > 700) {

    if (scrollHeight < scrolled) {
      dispatch(showHeader(scrollHeight));
    }

    if (scrollHeight > scrolled + 100) {
      dispatch(hideHeader(scrollHeight));
    }
  }
};

export default headerScrollProcessing;
