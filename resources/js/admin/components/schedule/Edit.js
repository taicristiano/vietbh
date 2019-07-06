// resources/assets/js/components/UserList.js

import React, {Component} from 'react'
import axios, {post} from 'axios/index';
import ScheduleContent from "./ScheduleContent";

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scheduleDay: 0,
            countContent: 0
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreateNewProject = this.handleCreateNewProject.bind(this);
    }

    componentDidMount() {
        axios.get(window.Laravel.baseUrl + '/api/schedule/' + this.props.match.params.id)
            .then(response => {
                if (response.data.status === 1) {
                    this.setState(response.data.data);
                    this.setState({
                        countContent: this.state.schedule_contents.length
                    })
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }


    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    fileChangedHandler = (event) => {
        this.setState({thumbnailUpdate: event.target.files[0]})
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
        for (let key in data) {
            formData.append(key, data[key]);
        }
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

    deleteScheduleContent = (id) => {
        const url = '/api/scheduleContent/' + id;
        axios.delete(url).then(response => {
            if (response.data.status === 1) {
                this.setState(response.data.data);
                this.setState({
                    countContent: this.state.schedule_contents.length
                })
            }
        })
            .catch(err => {
                console.log(err);
            });
    };

    makeScheduleContentDay = () => {
        if (this.state.schedule_contents instanceof Array) {
            return this.state.schedule_contents.map((object, i) => {
                return <ScheduleContent obj={object} key={i} index={i} getValue={this.handleFieldChange}
                                        deleteScheduleContent={this.deleteScheduleContent}/>
            });
        }
    };

    makeScheduleContentAddDay = () => {
        let scheduleContent = [];
        let countContent = this.state.countContent + 1;
        if (this.state.scheduleDay > 0) {
            for (let i = 0; i < this.state.scheduleDay; i++) {
                scheduleContent.push(<ScheduleContent key={i} countContent={countContent} number={i}
                                                      getValue={this.handleFieldChange}/>);
                countContent++
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
                                               defaultValue={this.state.title}
                                               onChange={this.handleFieldChange}/>
                                    </div>
                                    <div className="form-group col-xs-6">
                                        <img className="image" src={this.state.thumbnail}/>
                                    </div>
                                    <div className="form-group col-xs-6">
                                        <label htmlFor="">Thumbnail</label>
                                        <input type="file" className="form-control" id="thumbnailUpdate"
                                               name="thumbnailUpdate"
                                               onChange={this.fileChangedHandler}/>
                                    </div>
                                    <div className="form-group col-xs-12">
                                        <label htmlFor="editor1">Nội dung tóm tắt</label>
                                        <textarea className="form-control" name="short_content" rows="5"
                                                  value={this.state.short_content}
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
                                {this.makeScheduleContentAddDay()}
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

export default Edit