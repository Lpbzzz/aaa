/*
 * @Date: 2019-12-06 11:29:17
 * @LastEditors: Lpbzzz
 * @LastEditTime: 2019-12-06 12:12:14
 */
import React from 'react';

import {Router, Route, Switch} from 'dva/router';
import List from './list';
import App from './App';
import Show from './list/show';


function RouterConfig({history, app}) {

	return (
		<Router history={history}>
			<Switch>
				<Route path="/list" exact component={List}/>
				<Route path="/app" exact component={App}/>
				<Route path="/show" exact component={Show}/>
			</Switch>
		</Router>
	);
}

export default RouterConfig;
