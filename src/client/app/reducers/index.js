import { handleActions } from 'redux-actions';

import { loadFlightsStart, loadFlightsSuccess, loadFlightsFailure } from '../actions/flight';
import { changeSearchRequest } from '../actions/search';

const initialState = {
	flights: [],
	status: 'departing',
	searchRequest: '',
	error: '',
};

export default handleActions({

	[loadFlightsStart]: (state, action) => {
		return {
			...state,
			flights: [],
			status: action.payload
		};
	},

	[loadFlightsSuccess]: (state, action) => {
		return {
			...state,
			error: '',
			flights: action.payload
		};
	},

	[loadFlightsFailure]: (state, action) => {
		return {
			...state,
			error: action.payload.message
		}
	},

	[changeSearchRequest]: (state, action) => {
		return {
			...state,
			searchRequest: action.payload
		}
	}

}, initialState);