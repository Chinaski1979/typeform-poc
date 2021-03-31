import { createSlice } from '@reduxjs/toolkit';
import { clientFormater, developerFormatter } from './dataFormatters';

// Slice
const slice = createSlice({
  name: 'clientForm',
  initialState: {
    clientsResponses: [],
    clientSelected: {},
    clientMatches: [],
  },
  reducers: {
    setClientsResponses: (state, action) => {
      state.clientsResponses = action.payload;
    },
    setClientMatches: (state, action) => {
      state.clientMatches = action.payload;
    },
    setSelectedClient: (state, action) => {
      state.clientSelected = action.payload;
    },
  },
});

export default slice.reducer;


// Actions
const { setClientsResponses, setClientMatches, setSelectedClient } = slice.actions;

export const _setClientsResponses = (clientsResponses) => dispatch => {
  const formattedData = clientsResponses.map(clientFormater);
  dispatch(setClientsResponses(formattedData));
}

export const _setClientMatches = (clientMatches) => dispatch => {
  const formattedData = clientMatches.map(developerFormatter);
  dispatch(setClientMatches(formattedData));
}

export const _setSelectedClient = (clientSelected) => dispatch => {
  localStorage.setItem('clientSelected', JSON.stringify(clientSelected))
  dispatch(setSelectedClient(clientSelected));
};
