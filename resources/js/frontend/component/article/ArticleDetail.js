import React, {Component} from 'react';
import axios from "axios";

class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let string = this.props.match.params.alias;
        let aryMedicine = string.split('-');
        let id = aryMedicine.splice(-1)[0];
        axios.get(window.Laravel.baseUrl + '/api/article/' + id)
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
                        <div className="blog-post-area">
                            <h2 className="title text-center">LÀM ĐẸP</h2>
                            <div className="single-blog-post">
                                <h2 className="text-center">{this.state.title}</h2>
                                <div className="post-meta">
                                    <ul>
                                        <li><i className="fa fa-user"/> Mac Doe</li>
                                        <li><i className="fa fa-clock-o"/> 1:33 pm</li>
                                        <li><i className="fa fa-calendar"/> DEC 5, 2013</li>
                                    </ul>
                                    <span>
									<i className="fa fa-star"/>
									<i className="fa fa-star"/>
									<i className="fa fa-star"/>
									<i className="fa fa-star"/>
									<i className="fa fa-star-half-o"/>
								</span>
                                </div>
                                <div className="control-img">
                                    <p dangerouslySetInnerHTML={{__html: this.state.content}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-sm-3">*/}
                    {/*    <h3>TIN LÀM ĐẸP ĐƯỢC XEM NHIỀU</h3>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default ArticleDetail;