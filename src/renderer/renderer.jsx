/**
 * React renderer.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from '../sagas';
import App from '../components/App';
import reducer from '../store/reducers/repos';

// Import the styles here to process them with webpack
import '@public/style.scss';

const saga = createSagaMiddleware();

const store = createStore(
	reducer,
	undefined,
	applyMiddleware(saga, logger)
);

saga.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
