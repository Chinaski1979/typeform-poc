import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import clientFormReducer from './clientFormReducer';
import developerFormReducer from './developerFormReducer';

const reducer = combineReducers({
  clientFormReducer,
  developerFormReducer,
});

const store = configureStore({
  reducer,
});

export default store;