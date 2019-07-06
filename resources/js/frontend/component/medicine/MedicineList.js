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
            return <MedicineRow obj={object} key={i} index={i}/>
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="features_items">
                        <h2 className="title text-center">Features Items</h2>
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