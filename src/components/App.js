import React, { Component } from 'react';

import Navbar from './Navbar';
import ReposList from './ReposGrid';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar />
				<ReposList />
			</div>
		);
	}
}

export default App;
