import {apiGet} from '../../api';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const action = (type, payload = {}) => ({type, ...payload});

export const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

export const createRequestActions = requestType => {
  const requestActionTypes = createRequestTypes(requestType);
  return {
    request: payload => action(requestActionTypes[REQUEST], payload),
    success: (response, payload) => action(requestActionTypes[SUCCESS], {...response, ...payload}),
    failure: (error, payload) => action(requestActionTypes[FAILURE], {...error, ...payload}),
  };
};

export const getEntity = (requestActions, endpoint, payload = {}) => dispatch => {
  dispatch(requestActions.request(payload));
  return apiGet({
    endpoint,
  }).then(
    response => dispatch(requestActions.success(response, payload)),
    err => dispatch(requestActions.failure(err, payload)),
  );
};

export const isFailureActionType = actionType => actionType.endsWith(FAILURE);
