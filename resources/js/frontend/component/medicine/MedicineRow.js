import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MedicineRow extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <NavLink to={'/' + this.props.obj.alias + '-' + this.props.obj.id + '.html'}>
                                <img src={this.props.obj.thumbnail_web} alt=""/>
                                <h2>{this.props.obj.format_price} VNĐ</h2>
                                <p>{this.props.obj.name}</p>
                            </NavLink>
                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"/>Thêm vào giỏ hàng</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MedicineRow;