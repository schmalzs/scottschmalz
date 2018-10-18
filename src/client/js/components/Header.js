import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  toolbar: {
    padding: theme.spacing.unit * 2
  }
});

const Header = props => {
  const { classes } = props;

  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h2" color="inherit">
          Scott Schmalz
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
