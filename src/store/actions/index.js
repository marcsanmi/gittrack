import { FETCH_USER_REPOSITORIES } from './actionTypes';

const fetchUserRepositories = userName => ({
	type: FETCH_USER_REPOSITORIES,
	userName: userName
});

export {
	fetchUserRepositories
}
