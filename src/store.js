import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";

let isBlocked;

const blockMountingMiddleware = () => (dispatch) => (action) => {

  if (action.type === 'TOGGLE_POPULAR_SLIDE' && isBlocked) {
      return;
  }

  isBlocked = true;
  setTimeout(() => isBlocked = false, 300);
  return dispatch(action);
};

const logMiddleware = ({ getState }) => (dispatch) => (action) => {
  console.log(action, action.type, getState());
  return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(
  logMiddleware,
  blockMountingMiddleware
));

export default store;