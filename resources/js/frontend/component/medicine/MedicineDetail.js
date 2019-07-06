import React, {Component} from 'react';
import axios from "axios";

class MedicineDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let string = this.props.match.params.alias;
        let aryMedicine = string.split('-');
        let id = aryMedicine.splice(-1)[0];
        axios.get(window.Laravel.baseUrl + '/api/medicine/' + id)
            .then(response => {
                if (response.data.status === 1) {
                    this.setState(response.data.data)
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="product-details">
                            <div className="col-sm-5">
                                <div className="view-product text-center">
                                    <img src={this.state.thumbnail_web} alt={this.state.name}/>
                                </div>

                            </div>
                            <div className="col-sm-7">
                                <div className="product-information">
                                    <h2>{this.state.name}</h2>
                                    <p>Mã sản phẩm: {this.state.id}</p>
                                    <span>
									<span>{this.state.format_price} VNĐ</span>
									<label>Số lượng :</label>
									<input type="text" defaultValue={1}/>
									<button type="button" className="btn btn-fefault cart">
										<i className="fa fa-shopping-cart"/>
										Thêm vào giỏ hàng
									</button>
								</span>
                                    <p><b>Xuất xứ:</b> Nhật Bản</p>
                                    <p><b>Sản xuất tại:</b> Đài Loan</p>
                                    <p><b>Khối lượng tịnh:</b> 200g</p>
                                </div>
                            </div>
                        </div>

                        <div className="category-tab shop-details-tab">
                            <div className="col-sm-12">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#details" data-toggle="tab">Chi tiết sản phẩm</a></li>
                                    <li><a href="#reviews" data-toggle="tab">Đánh giá</a></li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane active in medicine-config" id="details" dangerouslySetInnerHTML={{__html: this.state.content}}/>

                                <div className="tab-pane fade" id="reviews">
                                    <div className="col-sm-12">
                                        <ul>
                                            <li><a href=""><i className="fa fa-user"/>EUGEN</a></li>
                                            <li><a href=""><i className="fa fa-clock-o"/>12:41 PM</a></li>
                                            <li><a href=""><i className="fa fa-calendar-o"/>31 DEC 2014</a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure
                                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur.</p>
                                        <p><b>Thêm bình luận</b></p>

                                        <form action="#">
										<span>
											<input type="text" placeholder="Tên của bạn"/>
											<input type="email" placeholder="Số điện thoại"/>
										</span>
                                            <textarea name=""/>
                                            <button type="button" className="btn btn-default pull-right">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>

                            </div>
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
                                                        <button type="button" className="btn btn-default add-to-cart"><i
                                                            className="fa fa-shopping-cart"></i>Add to cart
                                                        </button>
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
                                                        <button type="button" className="btn btn-default add-to-cart"><i
                                                            className="fa fa-shopping-cart"></i>Add to cart
                                                        </button>
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
                                                        <button type="button" className="btn btn-default add-to-cart"><i
                                                            className="fa fa-shopping-cart"></i>Add to cart
                                                        </button>
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
                                                        <button type="button" className="btn btn-default add-to-cart"><i
                                                            className="fa fa-shopping-cart"></i>Add to cart
                                                        </button>
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
                                                        <button type="button" className="btn btn-default add-to-cart"><i
                                                            className="fa fa-shopping-cart"></i>Add to cart
                                                        </button>
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
                                                        <button type="button" className="btn btn-default add-to-cart"><i
                                                            className="fa fa-shopping-cart"></i>Add to cart
                                                        </button>
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
        );
    }
}

export default MedicineDetail;