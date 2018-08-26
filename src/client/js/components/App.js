import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

function App(props) {
  return (
    <Fragment>
      <Navbar />
      <div>Hello</div>
    </Fragment>
  );
}

App.propTypes = {};

export default App;
