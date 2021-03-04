import axios from 'axios';

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

export const getDeveloperFormResponses = async (queryParams = {}) => {
  try {
    const { textFilter } = queryParams;
    const possibleParams = Object.keys(queryParams);
    let query = '';
    
    if (possibleParams.some(filter => (typeof queryParams[filter] === 'string' || typeof queryParams[filter] === 'number'))) {
      const text = textFilter ? `&query=${textFilter}` : '';
      query = `${text}`
    }


    const response = await instance.get(`forms/${DEVELOPER_FORM_ID}/responses?completed=true${query.length ? query : ''}`);
    return response;
  } catch (err) {
    console.log(err);
  } 
};
