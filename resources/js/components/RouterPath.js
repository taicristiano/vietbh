import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import ScheduleList from "./schedule/List";
import ScheduleAdd from "./schedule/Add.js";
import ScheduleEdit from "./schedule/Edit.js";

class RouterPath extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/admin/schedule' component={ScheduleList}/>
                <Route exact path='/admin/schedule/add' component={ScheduleAdd}/>
                <Route exact path='/admin/schedule/edit/:id' component={ScheduleEdit}/>
            </Switch>
        )
    }
}

export default RouterPath