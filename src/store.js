import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
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
  thunkMiddleware,
  stringMiddleware,
  logMiddleware
));

const myAction = (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), 2000);
};

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), timeout);
};

store.dispatch('HELLO WORLD!');
store.dispatch(delayedActionCreator(7000));

export default store;