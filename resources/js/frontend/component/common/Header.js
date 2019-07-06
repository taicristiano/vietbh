import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import HeaderList from "./HeaderList";

const indexPath = '/index.html';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    checkActiveParentMenu = (path) => {
        let pathActive = window.location.pathname;
        return (pathActive.indexOf(path) !== -1) ? "active menu-open" : "";
    };

    componentDidMount() {
        axios.get(window.Laravel.baseUrl + '/api/category')
            .then(response => {
                if (response.data.status === 1) {
                    this.setState(response.data.data)
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    makeCategoryList() {
        if (this.state.category1 instanceof Array) {
            return this.state.category1.map((object, i) => {
                return <HeaderList obj={object} key={i} index={i}/>
            })
        }
    }

    makeCategoryList2() {
        if (this.state.category2 instanceof Array) {
            return this.state.category2.map((object, i) => {
                return <HeaderList obj={object} key={i} index={i}/>
            })
        }
    }

    makeCategoryList3() {
        if (this.state.category3 instanceof Array) {
            return this.state.category3.map((object, i) => {
                return <HeaderList obj={object} key={i} index={i}/>
            })
        }
    }

    render() {
        return (
            <header id="header">
                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contactinfo">
                                    <ul className="nav nav-pills">
                                        <li><a href="#"><i className="fa fa-phone"/> +2 95 01 88 821</a></li>
                                        <li><a href="#"><i className="fa fa-envelope"/> info@domain.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="social-icons pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><a href="#"><i className="fa fa-user"/> Account</a></li>
                                        <li><a href="#"><i className="fa fa-star"/> Wishlist</a></li>
                                        <li><a href="checkout.html"><i className="fa fa-crosshairs"/> Checkout</a>
                                        </li>
                                        <li><a href="cart.html"><i className="fa fa-shopping-cart"/> Cart</a></li>
                                        <li><a href="login.html"><i className="fa fa-lock"/> Login</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="pull-left">
                                    <div className="search_box pull-right">
                                        <input type="text" placeholder="Tìm kiếm..." />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="logo pull-right">
                                    <img src={'/frontend/images/logo.png'}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                                            data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"/>
                                        <span className="icon-bar"/>
                                        <span className="icon-bar"/>
                                    </button>
                                </div>
                                <div className="mainmenu pull-left">
                                    <ul className="nav navbar-nav collapse navbar-collapse">
                                        <li><NavLink to={'/index.html'}>TRANG CHỦ</NavLink></li>
                                        <li className="dropdown"><NavLink to={'#'}>CHĂM SÓC DA MẶT</NavLink>
                                            <ul role="menu" className="sub-menu">
                                            {this.makeCategoryList()}
                                            </ul>
                                        </li>
                                        <li className="dropdown"><NavLink to={'#'}>CHĂM SÓC BODY</NavLink>
                                            <ul role="menu" className="sub-menu">
                                                {this.makeCategoryList2()}
                                            </ul>
                                        </li>
                                        <li className="dropdown"><NavLink to={'#'}>VIÊN UỐNG BỔ SUNG</NavLink>
                                            <ul role="menu" className="sub-menu">
                                                {this.makeCategoryList3()}
                                            </ul>
                                        </li>
                                        <li><NavLink to={'/article/lam-dep.html'}>LÀM ĐẸP</NavLink></li>
                                        <li><NavLink to={'/clinic/lam-dep.html'}>PHÒNG KHÁM</NavLink></li>
                                        <li><NavLink to={'/contact-us.html'}>LIÊN HỆ</NavLink></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;