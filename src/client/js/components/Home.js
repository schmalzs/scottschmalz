import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    margin: 10
  },
  headshotAvatar: {
    width: 240,
    height: 240
  },
  githubAvatar: {
    width: 120,
    height: 120
  }
};

const Home = props => {
  const { classes } = props;

  return (
    <Grid container justify="center">
      <Grid item xs={3}>
        <Avatar
          alt="Scott Schmalz"
          src="static/images/headshot.jpg"
          className={classNames(classes.avatar, classes.headshotAvatar)}
        />
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
