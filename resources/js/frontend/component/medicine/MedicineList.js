import React, {Component} from 'react';
import axios from "axios";
import MedicineRow from "./MedicineRow";

class MedicineList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        let string = this.props.match.params.alias;
        let aryMedicine = string.split('-');
        let id = aryMedicine.splice(-1)[0];
        axios.get(window.Laravel.baseUrl + '/api/category/' + id)
            .then(response => {
                if (response.data.status === 1) {
                    document.title = response.data.data.cate_name;
                    this.setState(response.data.data)
                } else {
                    document.title = '';
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }


    fetchRows() {
        let list1 = this.state;
        delete list1.cate_name;
        let list = Object.values(list1);
        return list.map((object, i) => {
            return <MedicineRow obj={object} key={i} index={i}/>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="features_items">
                        <h2 className="title text-center">{this.state.cate_name}</h2>
                        {this.fetchRows()}
                    </div>
                    <ul className="pagination">
                        <li className="active"><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">&raquo;</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MedicineList;