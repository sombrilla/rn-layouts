import {handleActions} from 'redux-actions';
import {FAILURE, REQUEST, SUCCESS} from '../actions';
import {recipiesBaseActionType, RETRIEVE_RECIPIES} from '../actions/recipiesActions';

const initialState = {
  loadingRecipies: false,
  recipies: [],
};

export default handleActions(
  {
    [`${recipiesBaseActionType}/${RETRIEVE_RECIPIES}_${REQUEST}`]: state => ({
      ...state,
      loadingRecipies: true,
    }),
    [`${recipiesBaseActionType}/${RETRIEVE_RECIPIES}_${SUCCESS}`]: (state, action) => ({
      ...state,
      recipies: action.results,
      loadingRecipies: false,
    }),
    [`${recipiesBaseActionType}/${RETRIEVE_RECIPIES}_${FAILURE}`]: state => ({
      ...state,
      loadingRecipies: false,
    }),
  },
  initialState,
);
