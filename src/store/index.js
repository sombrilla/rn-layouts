import {persistStore} from 'redux-persist';
import configureStore from './configureStore';

const store = configureStore();
const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => store.getState();

export {getStore, getState, getPersistor};
