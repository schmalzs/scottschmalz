import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Theme from './Theme';
import Header from './Header';
import Home from './Home';
import '../lib/iconLibrary';

const styles = {
  root: {
    flexGrow: 1
  }
};

const App = props => {
  const { classes } = props;

  return (
    <Fragment>
      <CssBaseline />
      <Theme>
        <Grid container spacing={0} justify="center" className={classes.root}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Home />
          </Grid>
        </Grid>
      </Theme>
    </Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
