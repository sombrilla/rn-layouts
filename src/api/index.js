import axios from 'axios';
import {encode as btoa} from 'base-64';
import {BASE_URL, DEFAULT_TIMEOUT} from '../config/app';

/**
 * Create an instance of the api check docs for usage of instance https://github.com/axios/axios
 * @type {AxiosInstance}
 */
const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  // headers: {
  //   API_KEY: '237b12cbd0aa4740b915a7244f2c8946',
  // },
});

/**
 *
 * @param method
 * @param actionType
 * @param endpoint
 * @param params
 * @param body
 * @returns {function(*): *}
 */
const apiRequest = ({method, endpoint, params = null, body = null}) =>
  apiInstance
    .request({
      url: endpoint,
      method,
      params,
      data: body,
    })
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.message);
    });

/**
 * Wrapper actions for API Requests
 */
export const apiGet = ({endpoint, endpointProps, headers, params, body}) =>
  apiRequest({method: 'GET', endpoint, endpointProps, headers, params, body});
export const apiPost = ({endpoint, endpointProps, headers, params, body}) =>
  apiRequest({method: 'POST', endpoint, endpointProps, headers, params, body});
export const apiPatch = ({endpoint, endpointProps, headers, params, body}) =>
  apiRequest({method: 'PUT', endpoint, endpointProps, headers, params, body});
export const apiDelete = ({endpoint, endpointProps, headers, params, body}) =>
  apiRequest({method: 'DELETE', endpoint, endpointProps, headers, params, body});
