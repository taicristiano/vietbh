import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import ScheduleList from "./schedule/List";
import ScheduleAdd from "./schedule/Add.js";
import ScheduleEdit from "./schedule/Edit.js";
import MedicineList from "./medicine/List";
import MedicineAdd from "./medicine/Add.js";
import MedicineEdit from "./medicine/Edit.js";
import PostList from "./article/List";
import PostAdd from "./article/Add.js";
import PostEdit from "./article/Edit.js";

class RouterPath extends Component {
    render() {
        return (
            <Switch>
                {/*schedule path*/}
                <Route exact path='/admin/schedule' component={ScheduleList}/>
                <Route exact path='/admin/schedule/add' component={ScheduleAdd}/>
                <Route exact path='/admin/schedule/edit/:id' component={ScheduleEdit}/>
                {/*medicine path*/}
                <Route exact path='/admin/medicine' component={MedicineList}/>
                <Route exact path='/admin/medicine/add' component={MedicineAdd}/>
                <Route exact path='/admin/medicine/edit/:id' component={MedicineEdit}/>
                {/*post path*/}
                <Route exact path='/admin/article' component={PostList}/>
                <Route exact path='/admin/article/add' component={PostAdd}/>
                <Route exact path='/admin/article/edit/:id' component={PostEdit}/>
                {/*user path*/}
                <Route exact path='/admin/user' component={ScheduleList}/>
                <Route exact path='/admin/user/add' component={ScheduleAdd}/>
                <Route exact path='/admin/user/edit/:id' component={ScheduleEdit}/>
                {/*clinic path*/}
                <Route exact path='/admin/clinic' component={ScheduleList}/>
                <Route exact path='/admin/clinic/add' component={ScheduleAdd}/>
                <Route exact path='/admin/clinic/edit/:id' component={ScheduleEdit}/>
                {/*doctor path*/}
            </Switch>
        )
    }
}

export default RouterPath