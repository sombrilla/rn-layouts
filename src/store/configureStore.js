/* eslint-disable no-underscore-dangle,dot-notation */
import {compose, createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import persistedReducers from './reducers';
import {logger} from './middleware';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const middleware = [thunkMiddleware, logger];

const getReduxStore = () =>
  composeEnhancers(applyMiddleware(...middleware))(createStore)(persistedReducers);

/**
 * This function is used to persist the store on start up and return a callback once this has be
 * done.
 */
export const persistStoreWithCallback = store =>
  new Promise(resolve => {
    persistStore(
      store,
      {
        /* persist config  */
      },
      () => resolve(),
    );
  });

export default getReduxStore;
