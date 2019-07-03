// resources/assets/js/components/UserList.js

import React, {Component} from 'react'
import axios from 'axios/index'
import ScheduleRow from './Row'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedules: ''
        }
    };

    componentDidMount() {
        axios.get(window.Laravel.baseUrl + '/api/schedule')
            .then(response => {
                if (response.data.status === 1) {
                    this.setState(
                        {schedules: response.data.data}, function () {
                        }
                    )
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    deleteRow(key) {
        var schedules = [...this.state.schedules];
        schedules.splice(key, 1);
        this.setState({schedules});
    }

    fetchRows() {
        if (this.state.schedules instanceof Array) {
            return this.state.schedules.map((object, i) => {
                return <ScheduleRow obj={object} key={i} index={i} deleteRow={this.deleteRow.bind(this)}/>
            })
        }
    }

    render() {
        return (
            <section className="content">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Số thứ tự</th>
                        <th>Tên lịch trình</th>
                        <th>Thumbnail</th>
                        <th>Short content</th>
                        <th>Chỉnh sửa</th>
                        <th>Xóa</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.fetchRows()}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default List