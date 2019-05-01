import { call, put } from 'redux-saga/effects';
import { ADD_USER_REPOSITORIES } from '../store/actions/actionTypes';

async function fetchUserRepositories(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}/repos`);
  const json = await response.json();
  return response.ok ? json : Promise.reject(json);
};

function* handleUserRepositories(action) {
	const { userName } = action;
	try {
		const result = yield call(fetchUserRepositories, userName);
		yield put({ type: ADD_USER_REPOSITORIES, repositories: result });
	} catch (error) {
		console.log('oops');
		console.log('err: ',error);
		yield put({ type: ADD_USER_REPOSITORIES, repositories: [], error });
	}
}

export { handleUserRepositories };
