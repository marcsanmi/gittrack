import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import { fetchUserRepositories } from '../store/actions';

const styles = theme => ({
	root: {
		width: '100%'
	},
	grow: {
		flexGrow: 1
	},
	searchButton: {
		marginLeft: 20
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit,
			width: 'auto'
		}
	},
	inputRoot: {
		color: 'inherit',
		width: '100%'
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 2,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200
			}
		}
	}
});

class Navbar extends Component {

	state = {
		searchName: null
	}
	
	constructor(props) {
		super(props);
	}

	updateSearchState = (event) => {
		const searchName = event.target.value;
		this.setState({ searchName });
	}

	render() {
		const { classes, onSearchClicked } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography
							className={classes.title}
							variant="h6"
							color="inherit"
							noWrap
						>
							Gittrack
						</Typography>
						<div className={classes.grow} />
						<div className={classes.search}>
							<InputBase
								onChange={this.updateSearchState}
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
							/>
						</div>
						<IconButton
							onClick={() => onSearchClicked(this.state.searchName)}
							className={classes.searchButton}
							color="inherit"
							aria-label="Open drawer"
						>
							<SearchIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
	onSearchClicked: userName => dispatch(fetchUserRepositories(userName))
});

export default connect(
	null,
	mapDispatchToProps
)(withStyles(styles)(Navbar));
