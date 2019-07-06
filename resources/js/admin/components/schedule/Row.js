// resources/assets/js/components/UserRow.js

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Row extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e) {
        e.preventDefault()
        if (!confirm('Are your sure you want to delete this item?')) {
            return false
        }
        let url = window.Laravel.baseUrl + '/api/schedule/' + this.props.obj.id;
        axios.delete(url)
            .then(response => {
                this.props.deleteRow(this.props.index)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    <img className='img-thumbnail' src={this.props.obj.thumbnail} alt={this.props.obj.title}/>
                </td>
                <td>
                    {this.props.obj.short_content}
                </td>
                <td>
                    <Link className='btn btn-primary' to={'/admin/schedule/edit/' + this.props.obj.id}>Edit</Link>
                </td>
                <td>
                    <button className='btn btn-danger' onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default Row