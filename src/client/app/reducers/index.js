import { handleActions } from 'redux-actions';

import { loadFlightsStart, loadFlightsSuccess, loadFlightsFailure } from '../actions/flight';
import { changeSearchRequest } from '../actions/search';

const initialState = {
	flights: [],
	error: '',
	searchRequest: '',
	isLoaded: false,
};

export default handleActions({

	[loadFlightsStart]: (state) => {
		return {
			...state,
			flights: [],
			error: '',
			isLoaded: false,
		};
	},

	[loadFlightsSuccess]: (state, action) => {
		return {
			...state,
			flights: action.payload,
			isLoaded: true,
		};
	},

	[loadFlightsFailure]: (state, action) => {
		return {
			...state,
			error: action.payload.message,
			isLoaded: true,
		}
	},

	[changeSearchRequest]: (state, action) => {
		return {
			...state,
			searchRequest: action.payload
		}
	}

}, initialState);