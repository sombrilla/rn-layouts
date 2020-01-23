import {handleActions} from 'redux-actions';
import {FAILURE, REQUEST, SUCCESS} from '../actions';
import {
  recipiesBaseActionType,
  RETRIEVE_RECIPIES,
  SEARCH_RECIPIES,
} from '../actions/recipiesActions';

const initialState = {
  loadingRecipies: false,
  recipies: [],
  loadingRecipiesResults: false,
  recipiesResults: [],
};

export default handleActions(
  {
    [`${recipiesBaseActionType}/${RETRIEVE_RECIPIES}_${REQUEST}`]: state => ({
      ...state,
      loadingRecipies: true,
    }),
    [`${recipiesBaseActionType}/${RETRIEVE_RECIPIES}_${SUCCESS}`]: (state, action) => ({
      ...state,
      recipies: action.recipes,
      loadingRecipies: false,
    }),
    [`${recipiesBaseActionType}/${RETRIEVE_RECIPIES}_${FAILURE}`]: state => ({
      ...state,
      loadingRecipies: false,
    }),
    [`${recipiesBaseActionType}/${SEARCH_RECIPIES}_${REQUEST}`]: state => ({
      ...state,
      loadingRecipiesResults: true,
    }),
    [`${recipiesBaseActionType}/${SEARCH_RECIPIES}_${SUCCESS}`]: (state, action) => ({
      ...state,
      recipiesResults: action.recipes,
      loadingRecipiesResults: false,
    }),
    [`${recipiesBaseActionType}/${SEARCH_RECIPIES}_${FAILURE}`]: state => ({
      ...state,
      loadingRecipiesResults: false,
    }),
  },
  initialState,
);
