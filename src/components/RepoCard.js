import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const styles = {
	card: {
    minWidth: 225,
    maxWidth: 300
	},
	cardContent: {
		height: 80
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
};

const RepoCard = ({ classes, fullName, description }) => {
	return (
		<Card className={classes.card}>
			<CardContent style={{height: '80px'}}>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					{fullName}
				</Typography>
        <Typography component="p">
          { description }
        </Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Select Repo</Button>
			</CardActions>
		</Card>
	);
};

export default withStyles(styles)(RepoCard);
