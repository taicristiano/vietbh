import React, {Component} from 'react';
import axios from "axios";
import ArticleRow from "./ArticleRow";

class ArticleList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        axios.get(window.Laravel.baseUrl + '/api/article')
            .then(response => {
                if (response.data.status === 1) {
                    this.setState(response.data.data)
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }


    fetchRows() {
        let list = Object.values(this.state);
        return list.map((object, i) => {
            return <ArticleRow obj={object} key={i} index={i}/>
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="blog-post-area">
                        <h2 className="title text-center">Latest From our Blog</h2>
                        {this.fetchRows()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleList;