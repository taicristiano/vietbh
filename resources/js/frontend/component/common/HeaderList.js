import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";

class HeaderList extends Component {
    render() {
        return (
            <li><Link to={'/category/' + this.props.obj.alias + '-' + this.props.obj.id + '.html'}>{this.props.obj.name}</Link></li>
        );
    }
}

export default HeaderList;