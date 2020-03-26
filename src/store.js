import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action, action.type, getState());
  return next(action);
};

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    });
  }

  return next(action);
};

const store = createStore(reducer, applyMiddleware(
  stringMiddleware,
  logMiddleware
));

store.dispatch('HELLO WORLD!');

export default store;