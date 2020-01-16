import {base} from '../../config/app/endpoints';
import {createRequestActions, getEntity} from './index';

export const recipiesBaseActionType = 'recipiesActions';

export const RETRIEVE_RECIPIES = 'RETRIEVE_RECIPIES';
export const recipiesActions = createRequestActions(
  `${recipiesBaseActionType}/${RETRIEVE_RECIPIES}`,
);

export const retrieveRecipies = () => dispatch =>
  dispatch(getEntity(recipiesActions, `${base.ENDPOINT}`));

export const SEARCH_RECIPIES = 'SEARCH_RECIPIES';
export const searchRecipiesActions = createRequestActions(
  `${recipiesBaseActionType}/${SEARCH_RECIPIES}`,
);

export const searchRecipies = query => dispatch => {
  dispatch(getEntity(searchRecipiesActions, `${base.ENDPOINT}/?q=${query}`));
};
