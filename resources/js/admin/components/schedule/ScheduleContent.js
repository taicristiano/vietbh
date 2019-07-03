import React, {Component} from 'react';

class ScheduleContent extends Component {
    makeList = () => {
        if (this.props.obj) {
            return (
                <div className="box form-group col-xs-12">
                    <div className="box-header">
                        <h3 className="box-title">Ngày {this.props.index + 1}</h3>
                        <div className="pull-right box-tools">
                            <button type="button" className="btn btn-info btn-sm" onClick={() => {this.props.deleteScheduleContent(this.props.obj.id)}}
                                    data-toggle="tooltip"
                                    title="Remove">
                                <i className="fa fa-times"/></button>
                        </div>
                    </div>
                    <div className="form-group box-body">
                        <textarea className="form-control" name={"scheduleContentUpdate[" + this.props.obj.id + "]"}
                                  defaultValue={this.props.obj.content} onChange={this.props.getValue} rows="5"/>
                    </div>
                </div>
            )
        } else if (this.props.countContent) {
            return (
                <div className="box col-xs-12 form-group">
                    <div className="box-header">
                        <h3 className="box-title">Ngày {this.props.countContent}</h3>
                        <div className="pull-right box-tools">
                            <button type="button" className="btn btn-info btn-sm" data-widget="remove"
                                    data-toggle="tooltip"
                                    title="Remove">
                                <i className="fa fa-times"/></button>
                        </div>
                    </div>
                    <div className="form-group box-body">
                    <textarea className="form-control" name={"scheduleContentInsert[" + this.props.countContent + "]"}
                              onChange={this.props.getValue} rows="5"/>
                    </div>
                </div>
            )
        }
        return (
            <div className="box col-xs-12 form-group">
                <div className="box-header">
                    <h3 className="box-title">Ngày {this.props.number + 1}</h3>
                    <div className="pull-right box-tools">
                        <button type="button" className="btn btn-info btn-sm" data-widget="remove"
                                data-toggle="tooltip"
                                title="Remove">
                            <i className="fa fa-times"/></button>
                    </div>
                </div>
                <div className="form-group box-body">
                    <textarea className="form-control" name={"scheduleContent[" + this.props.number + "]"}
                              onChange={this.props.getValue} rows="5"/>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div>
                {this.makeList()}
            </div>
        );
    }
}

export default ScheduleContent;