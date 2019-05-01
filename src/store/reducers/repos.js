import {
	FETCH_USER_REPOSITORIES,
	ADD_USER_REPOSITORIES
} from '../actions/actionTypes';

const initialState = {
	repositories: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_REPOSITORIES:
			return state;
		case ADD_USER_REPOSITORIES:
			return {
				...state,
				repositories: action.repositories
			};
		default:
			return state;
	}
};

export default reducer;
