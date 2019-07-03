import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

const schedulePath = '/admin/schedule';
const medicinePath = '/admin/medicine';
const postPath = '/admin/article';
const userPath = '/admin/user';
const clinicPath = '/admin/clinic';

class Sidebar extends Component {

    checkActiveParentMenu = (path) => {
        let pathActive = window.location.pathname;
        return (pathActive.indexOf(path) !== -1) ? "active menu-open" : "";
    };

    checkActive = (path) => {
        let pathActive = window.location.pathname;
        return (pathActive === path) ? 'active' : ''
    };

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        {/* schedule sidebar*/}
                        <li className={"treeview " + this.checkActiveParentMenu(schedulePath)}>
                            <a href="#">
                                <i className="fa fa-dashboard"/><span>Lịch trình</span>
                                <span className="pull-right-container"><i className="fa fa-angle-left pull-right"/></span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.checkActive(schedulePath)}>
                                    <NavLink className="active" to={schedulePath}>Danh sách</NavLink>
                                </li>
                                <li className={this.checkActive(schedulePath + "/add")}>
                                    <NavLink to={schedulePath + "/add"}>Thêm mới</NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* medicine sidebar*/}
                        <li className={"treeview " + this.checkActiveParentMenu(medicinePath)}>
                            <a href="#">
                                <i className="fa fa-dashboard"/><span>Mĩ phẩm</span>
                                <span className="pull-right-container"><i className="fa fa-angle-left pull-right"/></span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.checkActive(medicinePath)}>
                                    <NavLink className="active" to={medicinePath}>Danh sách</NavLink>
                                </li>
                                <li className={this.checkActive(medicinePath + "/add")}>
                                    <NavLink to={medicinePath + "/add"}>Thêm mới</NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* post sidebar*/}
                        <li className={"treeview " + this.checkActiveParentMenu(postPath)}>
                            <a href="#">
                                <i className="fa fa-dashboard"/><span>Bài đăng</span>
                                <span className="pull-right-container"><i className="fa fa-angle-left pull-right"/></span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.checkActive(postPath)}>
                                    <NavLink className="active" to={postPath}>Danh sách</NavLink>
                                </li>
                                <li className={this.checkActive(postPath + "/add")}>
                                    <NavLink to={postPath + "/add"}>Thêm mới</NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* user sidebar*/}
                        <li className={"treeview " + this.checkActiveParentMenu(userPath)}>
                            <a href="#">
                                <i className="fa fa-dashboard"/><span>Người dùng</span>
                                <span className="pull-right-container"><i className="fa fa-angle-left pull-right"/></span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.checkActive(userPath)}>
                                    <NavLink className="active" to={userPath}>Danh sách</NavLink>
                                </li>
                                <li className={this.checkActive(userPath + "/add")}>
                                    <NavLink to={userPath + "/add"}>Thêm mới</NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* clinic sidebar*/}
                        <li className={"treeview " + this.checkActiveParentMenu(clinicPath)}>
                            <a href="#">
                                <i className="fa fa-dashboard"/><span>Phòng khám</span>
                                <span className="pull-right-container"><i className="fa fa-angle-left pull-right"/></span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.checkActive(clinicPath)}>
                                    <NavLink className="active" to={clinicPath}>Danh sách</NavLink>
                                </li>
                                <li className={this.checkActive(clinicPath + "/add")}>
                                    <NavLink to={clinicPath + "/add"}>Thêm mới</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Sidebar;