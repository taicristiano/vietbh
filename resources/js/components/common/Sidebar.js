import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview menu-open">
                            <a href="#">
                                <i className="fa fa-dashboard"></i> <span>Lịch trình</span>
                                <span className="pull-right-container"><i className="fa fa-angle-left pull-right"></i></span>
                            </a>
                            <ul className="treeview-menu">
                                <li><NavLink className="active"  to='/admin/schedule'>Danh sách</NavLink></li>
                                <li><NavLink to='/admin/schedule/add'>Thêm mới</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Sidebar;