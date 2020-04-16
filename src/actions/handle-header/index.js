import showHeader from "./show-header";
import hideHeader from "./hide-header";

const headerScrollProcessing = (dispatch, scrolled) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 500) {

    if (scrollHeight < scrolled) {
      dispatch(showHeader(scrollHeight));
    }

    if (scrollHeight > scrolled + 100) {
      dispatch(hideHeader(scrollHeight));
    }
  }
};

export default headerScrollProcessing;
