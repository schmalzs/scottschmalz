import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import * as analytics from './lib/analytics';

analytics.initialize('UA-126806170-1');

render(<App />, document.getElementById('root'));
