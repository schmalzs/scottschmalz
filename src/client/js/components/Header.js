import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  name: {
    fontWeight: 'bold'
  },
  toolbar: {
    padding: theme.spacing.unit * 2
  }
});

const Header = props => {
  const {
    classes: { name, toolbar }
  } = props;

  return (
    <AppBar position="static" color="primary">
      <Toolbar className={toolbar}>
        <Typography variant="h2" color="inherit" className={name}>
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
