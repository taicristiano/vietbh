import React, {Component} from 'react';
import Slider from "../common/Slider";
import axios from 'axios/index';
import Suggest from "./Suggest";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    };

    componentDidMount() {
        axios.get(window.Laravel.baseUrl + '/api/index')
            .then(response => {
                if (response.data.status === 1) {
                    this.setState(
                        {
                            data: response.data.data
                        }, function () {
                        }
                    )
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    suggestItem = () => {
        if (this.state.data.suggest instanceof Array) {
            return this.state.data.suggest.map((object, i) => {
                return <Suggest obj={object} key={i} index={i}/>
            })
        }
    };


    render() {
        return (
            <div>
                <Slider/>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="">
                                <div className="features_items">
                                    <h2 className="title text-center">GỢI Ý CHO BẠN</h2>
                                    {this.suggestItem()}
                                </div>
                                <div className="recommended_items">
                                    <h2 className="title text-center">recommended items</h2>
                                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <div className="col-sm-4">
                                                    <div className="product-image-wrapper">
                                                        <div className="single-products">
                                                            <div className="productinfo text-center">
                                                                <img src="images/home/recommend1.jpg" alt=""/>
                                                                <h2>$56</h2>
                                                                <p>Easy Polo Black Edition</p>
                                                                <a href="#" className="btn btn-default add-to-cart"><i
                                                                    className="fa fa-shopping-cart"></i>Add to cart</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="product-image-wrapper">
                                                        <div className="single-products">
                                                            <div className="productinfo text-center">
                                                                <img src="images/home/recommend2.jpg" alt=""/>
                                                                <h2>$56</h2>
                                                                <p>Easy Polo Black Edition</p>
                                                                <a href="#" className="btn btn-default add-to-cart"><i
                                                                    className="fa fa-shopping-cart"></i>Add to cart</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="product-image-wrapper">
                                                        <div className="single-products">
                                                            <div className="productinfo text-center">
                                                                <img src="images/home/recommend3.jpg" alt=""/>
                                                                <h2>$56</h2>
                                                                <p>Easy Polo Black Edition</p>
                                                                <a href="#" className="btn btn-default add-to-cart"><i
                                                                    className="fa fa-shopping-cart"></i>Add to cart</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="col-sm-4">
                                                    <div className="product-image-wrapper">
                                                        <div className="single-products">
                                                            <div className="productinfo text-center">
                                                                <img src="images/home/recommend1.jpg" alt=""/>
                                                                <h2>$56</h2>
                                                                <p>Easy Polo Black Edition</p>
                                                                <a href="#" className="btn btn-default add-to-cart"><i
                                                                    className="fa fa-shopping-cart"></i>Add to cart</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="product-image-wrapper">
                                                        <div className="single-products">
                                                            <div className="productinfo text-center">
                                                                <img src="images/home/recommend2.jpg" alt=""/>
                                                                <h2>$56</h2>
                                                                <p>Easy Polo Black Edition</p>
                                                                <a href="#" className="btn btn-default add-to-cart"><i
                                                                    className="fa fa-shopping-cart"></i>Add to cart</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="product-image-wrapper">
                                                        <div className="single-products">
                                                            <div className="productinfo text-center">
                                                                <img src="images/home/recommend3.jpg" alt=""/>
                                                                <h2>$56</h2>
                                                                <p>Easy Polo Black Edition</p>
                                                                <a href="#" className="btn btn-default add-to-cart"><i
                                                                    className="fa fa-shopping-cart"></i>Add to cart</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="left recommended-item-control" href="#recommended-item-carousel"
                                           data-slide="prev">
                                            <i className="fa fa-angle-left"></i>
                                        </a>
                                        <a className="right recommended-item-control" href="#recommended-item-carousel"
                                           data-slide="next">
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Index;