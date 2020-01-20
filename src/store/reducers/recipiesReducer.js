import {handleActions} from 'redux-actions';
import {FAILURE, REQUEST, SUCCESS} from '../actions';
import {
  recipiesBaseActionType,
  RETRIEVE_RECIPIES,
  RETRIEVE_MORE_RECIPIES,
  SEARCH_RECIPIES,
} from '../actions/recipiesActions';

const initialState = {
  loadingRecipies: false,
  loadingMoreRecipies: false,
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
      recipies: action.results,
      loadingRecipies: false,
    }),
    [`${recipiesBaseActionType}/${RETRIEVE_RECIPIES}_${FAILURE}`]: state => ({
      ...state,
      loadingRecipies: false,
    }),
    [`${recipiesBaseActionType}/${RETRIEVE_MORE_RECIPIES}_${REQUEST}`]: state => ({
      ...state,
      loadingMoreRecipies: true,
    }),
    [`${recipiesBaseActionType}/${RETRIEVE_MORE_RECIPIES}_${SUCCESS}`]: (state, action) => ({
      ...state,
      recipies: state.recipies.concat(action.results),
      loadingMoreRecipies: false,
    }),
    [`${recipiesBaseActionType}/${RETRIEVE_MORE_RECIPIES}_${FAILURE}`]: state => ({
      ...state,
      loadingMoreRecipies: false,
    }),
    [`${recipiesBaseActionType}/${SEARCH_RECIPIES}_${REQUEST}`]: state => ({
      ...state,
      loadingRecipiesResults: true,
    }),
    [`${recipiesBaseActionType}/${SEARCH_RECIPIES}_${SUCCESS}`]: (state, action) => ({
      ...state,
      recipiesResults: action.results,
      loadingRecipiesResults: false,
    }),
    [`${recipiesBaseActionType}/${SEARCH_RECIPIES}_${FAILURE}`]: state => ({
      ...state,
      loadingRecipiesResults: false,
    }),
  },
  initialState,
);
