import axios from 'axios';
import { _setClientsResponses, _setClientMatches } from './store/clientFormReducer';
import { _setDevelopersResponses } from './store/developerFormReducer';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/1.0',
  timeout: 1000,
  headers: {
    'content-type': 'application/json',
  },
});

const queryHandler = (queryParams) => {
  const { textFilter } = queryParams;
  const possibleParams = Object.keys(queryParams);
  let query = '';
  
  if (possibleParams.some(filter => (typeof queryParams[filter] === 'string' || typeof queryParams[filter] === 'number'))) {
    const text = textFilter ? `&query=${textFilter}` : '';
    query = `${text}`
  }
  return query;
};

export const getDeveloperResponses = (queryParams = {}) => async dispatch => {
  try {
    const query = queryHandler(queryParams);
    const { data } = await instance.get(`developerResponses?completed=true${query.length ? query : ''}`);
    dispatch(_setDevelopersResponses(data.response));
  } catch (err) {
    console.log(err);
  } 
};

export const getClientResponses = (queryParams = {}) => async dispatch => {
  try {
    const query = queryHandler(queryParams);
    const { data } = await instance.get(`clientResponses?completed=true${query.length ? query : ''}`);
    dispatch(_setClientsResponses(data.response));
  } catch (err) {
    console.log(err);
  } 
};

export const getMatchingDevelopers = (query) => async dispatch => {
  try {
    const { data } = await instance.get(`developerResponses?completed=true&query=${query}`);
    dispatch(_setClientMatches(data.response));
  } catch (err) {
    console.log(err);
  } 
};
