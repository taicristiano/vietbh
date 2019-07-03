// resources/assets/js/components/UserList.js

import React, {Component} from 'react'
import {post} from 'axios/index';
import ScheduleContent from "./ScheduleContent";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scheduleDay: 0,
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreateNewProject = this.handleCreateNewProject.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    fileChangedHandler = (event) => {
        this.setState({thumbnail: event.target.files[0]})
    };

    handleCreateNewProject(event) {
        event.preventDefault();
        const {history} = this.props;

        this.uploadData(this.state).then((response) => {
            if (response.data.status == 1) {
                history.push('/admin/schedule');
            } else {
                alert(response.data.error);
            }
        })
    }

    uploadData = (data) => {
        const url = '/api/schedule';
        const formData = new FormData();
        for (let key in data) formData.append(key, data[key]);
        const config = {
            'content-type': 'multipart/form-data'
        };
        return post(url, formData, config)
    };

    search = (event) => {
        const {target: {value}} = event;
        this.setState({
            scheduleDay: value
        });
    };

    makeScheduleContentDay = () => {
        let scheduleContent = [];
        if (this.state.scheduleDay > 0) {
            for (let i = 0; i < this.state.scheduleDay; i++) {
                scheduleContent.push(<ScheduleContent key={i} number={i} getValue={this.handleFieldChange}/>)
            }
            return scheduleContent;
        }
    };

    render() {
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box box-primary">
                            <form onSubmit={this.handleCreateNewProject} encType="multipart/form-data">
                                <div className="box-body">
                                    <div className="form-group col-xs-6">
                                        <label htmlFor="exampleInputEmail1">Tiêu đề</label>
                                        <input type="text" className="form-control" id="title" name="title"
                                               onChange={this.handleFieldChange}/>
                                    </div>
                                    <div className="form-group col-xs-6">
                                        <label htmlFor="">Thumbnail</label>
                                        <input type="file" className="form-control" id="thumbnail" name="thumbnail"
                                               onChange={this.fileChangedHandler}/>
                                    </div>
                                    <div className="form-group col-xs-12">
                                        <label htmlFor="editor1">Nội dung tóm tắt</label>
                                        <textarea className="form-control" name="short_content" rows="5"
                                                  onChange={this.handleFieldChange}/>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="form-group col-xs-3">
                                        <input type="text" className="form-control" id="test"
                                               placeholder="Chọn số ngày lịch trình"
                                               onChange={(event) => this.search(event)}/>
                                    </div>
                                </div>
                                {this.makeScheduleContentDay()}
                                <div className="box-footer text-center">
                                    <button type="submit" className="btn btn-primary ">Thêm mới</button>
                                    <button type="reset" className="btn btn-danger ">Hủy bỏ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Add