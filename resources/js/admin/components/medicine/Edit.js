// resources/assets/js/components/UserList.js

import React, {Component} from 'react'
import axios, {post} from 'axios/index';
import CKEditor from "react-ckeditor-component";

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreateNewProject = this.handleCreateNewProject.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    componentDidMount() {
        axios.get(window.Laravel.baseUrl + '/api/medicine/' + this.props.match.params.id)
            .then(response => {
                if (response.data.status === 1) {
                    this.setState(response.data.data);
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

    handleEditorChange(evt) {
        let newContent = evt.editor.getData();
        this.setState({
            content: newContent
        })

    }

    fileChangedHandler = (event) => {
        this.setState({thumbnailUpdate: event.target.files[0]})
    };

    handleCreateNewProject(event) {
        event.preventDefault();
        const {history} = this.props;

        this.uploadData(this.state).then((response) => {
            if (response.data.status == 1) {
                history.push('/admin/medicine');
            } else {
                alert(response.data.error);
            }
        })
    }

    uploadData = (data) => {
        const url = '/api/medicine';
        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        const config = {
            'content-type': 'multipart/form-data'
        };
        return post(url, formData, config)
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
                                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                                        <input type="text" className="form-control" id="name" name="name" defaultValue={this.state.name}
                                               onChange={this.handleFieldChange}/>
                                    </div>
                                    <div className="form-group col-xs-6">
                                        <img className="image" src={this.state.thumbnail_web}/>
                                    </div>
                                    <div className="form-group col-xs-6">
                                        <label htmlFor="">Thumbnail</label>
                                        <input type="file" className="form-control" id="thumbnailUpdate"
                                               name="thumbnailUpdate"
                                               onChange={this.fileChangedHandler}/>
                                    </div>
                                    <div className="form-group col-xs-12">
                                        <label htmlFor="editor1">Nội dung tóm tắt</label>
                                        <textarea className="form-control" name="short_content" rows="5" value={this.state.short_content}
                                                  onChange={this.handleFieldChange}/>
                                    </div>
                                    <div className="form-group col-xs-12">
                                        <label htmlFor="editor1">Mô tả sản phẩm</label>
                                        <CKEditor
                                            activeClass="p10"
                                            content={this.state.content}
                                            events={{
                                                "blur": this.onBlur,
                                                "afterPaste": this.afterPaste,
                                                "change": this.handleEditorChange
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-xs-6">
                                        <label htmlFor="exampleInputEmail1">Giá</label>
                                        <input type="text" className="form-control" id="price" name="price" defaultValue={this.state.price}
                                               onChange={this.handleFieldChange}/>
                                    </div>
                                </div>
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