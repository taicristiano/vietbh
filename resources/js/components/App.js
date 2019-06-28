import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import RouterPath from './RouterPath';
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import {Provider} from "react-redux";
// import Store from "./components/Store";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Sidebar/>
                    <div className="content-wrapper"><RouterPath/></div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));