import store from "../store";
import { showHeader } from "../actions";

const jumpToTop = () => {
  store.dispatch(showHeader(0));
  window.scrollTo( 0, 0 );

  return false;
};

export default jumpToTop;