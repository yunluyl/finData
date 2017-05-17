'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
import Highcharts from 'highcharts/highstock';

class Index extends React.Component
{
	componentDidMount()
	{
		var AAPL = Highcharts.stockChart('container', {
			rangeSelector : {
				selected : 5
			},
			series : [{
				name : 'AAPL',
				data : [{x : 100, y : 10}, {x : 10000000000, y : 1000}]
			}]
		});
	}

	render()
	{
		const styles =
		{
			width : '100%',
			height : '400px'
		};
		return (
			<div id="container" style={styles}></div>
		);
	}
}

export default Index;