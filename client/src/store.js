import u from 'updeep';
import throttle from 'lodash/throttle';
import { applyMiddleware, createStore, compose } from 'redux';
// import get from 'lodash/get';
import promiseMiddleware from 'redux-promise-middleware';
import {thunk} from 'redux-thunk';
import { initialState } from './config';

const saveLocalStorageThrottle = throttle((store) => {
  localStorage.setItem('redux', JSON.stringify(store.getState()));
}, 100);

const saveLocalStorageMiddleware = (store) => (next) => (action) => {
  saveLocalStorageThrottle(store);
  return next(action);
};

const crashReporter = (_store) => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    return next();
  }
};

let middleware = [
  crashReporter,
  promiseMiddleware(),
  thunk
];

export const createEddieStore = () => createStore(
  (state = initialState, { payload = {} }) => u(payload, state),
  compose(
    applyMiddleware(...middleware),
    /* eslint-disable no-underscore-dangle */
    window._REDUX_DEVTOOLS_EXTENSION_ ? window._REDUX_DEVTOOLS_EXTENSION_() : (f) => f
  )
);

const store = createEddieStore();
export default store;