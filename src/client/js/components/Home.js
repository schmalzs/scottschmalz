import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Mailto from 'react-protected-mailto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
  email: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.dark,
      textDecoration: 'underline'
    }
  },
  headshot: {
    margin: theme.spacing.unit * 4,
    width: 240,
    height: 240
  },
  icon: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark
    }
  }
});

const Home = props => {
  const { classes } = props;

  return (
    <Grid container justify="center">
      <Grid item container justify="center" xs={12}>
        <Avatar
          alt="Scott Schmalz"
          src="static/images/headshot.jpg"
          className={classes.headshot}
        />
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Typography variant="subheading">
          <Mailto className={classes.email} email="scott.schmalz@gmail.com" />
        </Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <a
          className={classes.icon}
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/schmalzs"
        >
          <FontAwesomeIcon size="3x" icon={['fab', 'github']} />
        </a>
        <a
          className={classes.icon}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/scottschmalz/"
        >
          <FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} />
        </a>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
