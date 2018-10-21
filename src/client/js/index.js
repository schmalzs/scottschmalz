import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as analytics from './lib/analytics';

analytics.initialize('UA-126806170-1');

ReactDOM.render(<App />, document.getElementById('root'));
