import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import config from '../config';
import recipies from './recipiesReducer';

const appReducer = combineReducers({
  recipies,
});

export default persistReducer(config, appReducer);
