import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'

const schedulePath = '/admin/schedule';
const scheduleAddPath = '/admin/schedule/add';
const medicinePath = '/admin/medicine';
const postPath = '/admin/article';
const userPath = '/admin/user';
const clinicPath = '/admin/clinic';

class Sidebar extends Component {

    checkActiveParentMenu = (path) => {
        let pathActive = window.location.pathname;
        return (pathActive.indexOf(path) !== -1) ? "active menu-open" : "";
    };

    checkShow = (path) => {
        let pathActive = window.location.pathname;
        return (pathActive.indexOf(path) !== -1) ? "show" : "";
    };

    checkActive = (path) => {
        let pathActive = window.location.pathname;
        return (pathActive == path) ? 'active' : ''
    };

    checkCollapsed = (path) => {
        let pathActive = window.location.pathname;
        return (pathActive.indexOf(path) !== -1) ? "" : "collapsed";
    };

    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"/>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"/>
                        <span>Dashboard</span></a>
                </li>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">
                    Interface
                </div>
                <li className={"nav-item " + this.checkActiveParentMenu(schedulePath)}>
                    <a className={"nav-link " + this.checkCollapsed(schedulePath)} href="#" data-toggle="collapse" data-target="#collapseTwo"
                       aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"/>
                        <span>Lịch trình</span>
                    </a>
                    <div id="collapseTwo" className={"collapse " + this.checkShow(schedulePath)} aria-labelledby="headingTwo"
                         data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className={"collapse-item " + this.checkActive(schedulePath)} to={schedulePath}>Danh sách</Link>
                            <Link className={"collapse-item "  + this.checkActive(schedulePath + '/add')} to={schedulePath + '/add'}>Thêm mới</Link>
                        </div>
                    </div>
                </li>
                <hr className="sidebar-divider d-none d-md-block"/>
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"/>
                </div>
            </ul>
        );
    }
}

export default Sidebar;