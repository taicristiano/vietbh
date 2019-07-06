import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import RouterPath from './RouterPath';
import Header from "./common/Header";
import {createBrowserHistory} from "history";


const history = createBrowserHistory();

history.listen(location => {
    setTimeout(() => {
        if (location.action === 'POP') {
            return;
        }
        window.scrollTo(0, 0);
    });
});


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Header/>
                    <div>
                        <RouterPath/>
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));