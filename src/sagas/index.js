import { takeEvery, all } from 'redux-saga/effects';
import { handleUserRepositories } from './repos';
import { FETCH_USER_REPOSITORIES } from '../store/actions/actionTypes';

function* watchAll() {
	yield all([takeEvery(FETCH_USER_REPOSITORIES, handleUserRepositories)]);
}

export default watchAll;
