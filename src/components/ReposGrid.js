import { connect } from 'react-redux';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import RepoCard from './RepoCard';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 10
	}
});

class ReposGrid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.root} spacing={40}>
				<Grid item xs={12}>
					<Grid
						container
						className={classes.demo}
						justify="center"
						spacing={16}
					>
						{this.props.repositories.map(repo => {
							return (
								<Grid key={repo.id} item>
									<RepoCard
										key={repo.id}
										fullName={repo.full_name}
										description={repo.description}
									/>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = state => ({
	repositories: state.repositories
});

// export default connect(
// 	mapStateToProps,
// 	null
// )(ReposList);

export default connect(
	mapStateToProps,
	null
)(withStyles(styles)(ReposGrid));
