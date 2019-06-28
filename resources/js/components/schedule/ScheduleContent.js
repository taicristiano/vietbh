import React, {Component} from 'react';

class ScheduleContent extends Component {

    makeList = () => {
        return (<div className="box-footer">
                <div className="form-group col-xs-12">
                    <label htmlFor="editor1">Ngày {this.props.number + 1}</label>
                    <textarea className="form-control" name={"scheduleContent[" + this.props.number + "]"} onChange={this.props.getValue} rows="5"/>
                </div>
            </div>
        )
    };

    render() {
        return (
            this.makeList()
        );
    }
}

export default ScheduleContent;