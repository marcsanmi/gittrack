/**
 * React renderer.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import App from '../components/App';

// Import the styles here to process them with webpack
//import '@public/style.scss';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
