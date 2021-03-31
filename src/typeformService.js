import axios from 'axios';
import { _setClientsResponses, _setClientMatches } from './store/clientFormReducer';
import { _setDevelopersResponses } from './store/developerFormReducer';

const token = 'HpWeYH82tiBmcN7ywLbWNaV3pYajpae6j7o85p8JQ7nv';
const instance = axios.create({
  baseURL: 'https://api.typeform.com/',
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${token}`,
    'content-type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  },
});

const DEVELOPER_FORM_ID = 'zisBMS5p';
const CLIENT_FORM_ID = 'FMR2xj4K';

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
    const response = await instance.get(`forms/${DEVELOPER_FORM_ID}/responses?completed=true${query.length ? query : ''}`);
    dispatch(_setDevelopersResponses(response.data.items.map(item => item.answers)));
  } catch (err) {
    console.log(err);
  } 
};

export const getClientResponses = (queryParams = {}) => async dispatch => {
  try {
    const query = queryHandler(queryParams);
    const response = await instance.get(`forms/${CLIENT_FORM_ID}/responses?completed=true${query.length ? query : ''}`);
    dispatch(_setClientsResponses(response.data.items.map(item => item.answers)));
  } catch (err) {
    console.log(err);
  } 
};

export const getMatchingDevelopers = (query) => async dispatch => {
  try {
    const response = await instance.get(`forms/${DEVELOPER_FORM_ID}/responses?completed=true&query=${query}`);
    dispatch(_setClientMatches(response.data.items.map(item => item.answers)));
  } catch (err) {
    console.log(err);
  } 
};
