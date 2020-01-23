import {base, random} from '../../config/app/endpoints';
import {API_KEY} from '../../config/app/index';
import {createRequestActions, getEntity} from './index';

export const recipiesBaseActionType = 'recipiesActions';

export const RETRIEVE_RECIPIES = 'RETRIEVE_RECIPIES';
export const recipiesActions = createRequestActions(
  `${recipiesBaseActionType}/${RETRIEVE_RECIPIES}`,
);

export const retrieveRecipies = quantity => dispatch =>
  dispatch(getEntity(recipiesActions, `${random.ENDPOINT}?apiKey=${API_KEY}&number=${quantity}`));

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
