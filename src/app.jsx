'use strict';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './index.jsx';

render(
	<Router>
		<Route path='/' component={Index} />
	</Router>,
	document.getElementById('root')
);