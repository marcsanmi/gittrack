import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar />
			</div>
		);
	}
}

const mapStateToProps = ({ repos }) => {
	const { list } = repos;
	return { list };
};

export default connect(mapStateToProps)(App);
