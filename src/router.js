/*
 * @Date: 2019-12-06 11:29:17
 * @LastEditors: Lpbzzz
 * @LastEditTime: 2019-12-10 14:27:38
 */
import React from 'react';

import {Router, Route, Switch, Redirect} from 'dva/router';



import PageIndex from '@/pages';


function RouterConfig({history, app}) {

    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={() => <PageIndex/>}/>
                <Route path="/b" component={() => <PageIndex message={'b'}/>}/>
                <Redirect from={'/*'} to={'/'}/>
            </Switch>
        </Router>
    );
}

export default RouterConfig;
