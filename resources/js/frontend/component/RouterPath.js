import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Index from './Index'

class RouterPath extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                {/*<Route exact path='/admin/schedule/add' component={ScheduleAdd}/>*/}
                {/*<Route exact path='/admin/schedule/edit/:id' component={ScheduleEdit}/>*/}
            </Switch>
        )
    }
}

export default RouterPath