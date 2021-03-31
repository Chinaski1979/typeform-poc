import { createSlice } from '@reduxjs/toolkit';
import { developerFormatter } from './dataFormatters';

// Slice
const slice = createSlice({
	name: 'developerForm',
	initialState: {
		developerResponses: [],
	},
	reducers: {
		setDevelopersResponses: (state, action) => {
			state.developerResponses = action.payload;
		},
	},
});

export default slice.reducer;


// Actions
const { setDevelopersResponses } = slice.actions;

export const _setDevelopersResponses = (developerResponses) => dispatch => {
  const formattedData = developerResponses.map(developerFormatter);

	dispatch(setDevelopersResponses(formattedData));
};
