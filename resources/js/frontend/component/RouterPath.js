import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Index from './index'
import MedicineDetail from "./medicine/MedicineDetail";
import MedicineList from "./medicine/MedicineList";
import ArticleList from "./article/ArticleList";
import ArticleDetail from "./article/ArticleDetail";

class RouterPath extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route exact path='/index.html' component={Index}/>
                <Route exact key={location.pathname} path='/:alias.html' component={MedicineDetail}/>
                <Route exact key={location.pathname} path='/category/:alias.html' component={MedicineList}/>
                <Route exact key={location.pathname} path='/article/lam-dep.html' component={ArticleList}/>
                <Route exact key={location.pathname} path='/article/:alias.html' component={ArticleDetail}/>
                {/*<Route exact path='/admin/schedule/edit/:id' component={ScheduleEdit}/>*/}
            </Switch>
        )
    }
}

export default RouterPath