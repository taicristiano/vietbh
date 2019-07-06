import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Slider extends Component {

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
            <section id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#slider-carousel" data-slide-to="0" className="active"/>
                                    <li data-target="#slider-carousel" data-slide-to="1"/>
                                    <li data-target="#slider-carousel" data-slide-to="2"/>
                                </ol>

                                <div className="carousel-inner text-center">
                                    <div className="item active text-center">
                                        <img src={"frontend/images/home/9b5df8399dd7ab31ae84f28102cf6c76.png"}
                                             className="girl img-responsive" alt=""/>
                                    </div>
                                    <div className="item text-center">
                                        <img src={"frontend/images/home/012ec12d6d2d27439d60e700247dcff8.png"}
                                             className="girl img-responsive"
                                             alt=""/>
                                    </div>
                                    <div className="item text-center">
                                        <img src={"frontend/images/home/6881372ff6c58e86ded1a5553f44076e.png"}
                                             className="girl img-responsive text-center"
                                             alt=""/>
                                    </div>
                                </div>

                                <a href="#slider-carousel" className="left control-carousel hidden-xs"
                                   data-slide="prev">
                                    <i className="fa fa-angle-left"/>
                                </a>
                                <a href="#slider-carousel" className="right control-carousel hidden-xs"
                                   data-slide="next">
                                    <i className="fa fa-angle-right"/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Slider;