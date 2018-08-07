import { createAction } from 'redux-actions';

export const changeSearchRequest = createAction('CHANGE_SEARCH_REQUEST');

export const handleSearchRequest = (dispatch) => (request) => {

	dispatch(changeSearchRequest(request));

};
