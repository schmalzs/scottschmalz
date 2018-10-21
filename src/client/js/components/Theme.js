import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#444' }
  },
  typography: {
    fontFamily: 'Verdana, Geneva, sans-serif'
  }
});

const Theme = ({ children }) => (
  <MuiThemeProvider theme={theme}>{...children}</MuiThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Theme;
