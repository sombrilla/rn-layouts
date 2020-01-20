import {base} from '../../config/app/endpoints';
import {createRequestActions, getEntity} from './index';

export const recipiesBaseActionType = 'recipiesActions';

export const RETRIEVE_RECIPIES = 'RETRIEVE_RECIPIES';
export const recipiesActions = createRequestActions(
  `${recipiesBaseActionType}/${RETRIEVE_RECIPIES}`,
);

export const retrieveRecipies = () => dispatch =>
  dispatch(getEntity(recipiesActions, `${base.ENDPOINT}`));

export const RETRIEVE_MORE_RECIPIES = 'RETRIEVE_MORE_RECIPIES';
export const moreRecipiesActions = createRequestActions(
  `${recipiesBaseActionType}/${RETRIEVE_MORE_RECIPIES}`,
);

export const retrieveMoreRecipies = page => dispatch =>
  dispatch(getEntity(moreRecipiesActions, `${base.ENDPOINT}/?p=${page}`));

export const SEARCH_RECIPIES = 'SEARCH_RECIPIES';
export const searchRecipiesActions = createRequestActions(
  `${recipiesBaseActionType}/${SEARCH_RECIPIES}`,
);

export const searchRecipies = (query, page) => dispatch => {
  if (!page || page <= 0) {
    return dispatch(getEntity(searchRecipiesActions, `${base.ENDPOINT}/?q=${query}`));
  }

  return dispatch(getEntity(searchRecipiesActions, `${base.ENDPOINT}/?q=${query}&p=${page}`));
};
