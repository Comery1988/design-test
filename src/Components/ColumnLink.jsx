import React from "react";

class ColumnLink extends React.Component {
    render(){
        return (
        <React.Fragment>
            <li><a href={this.props.url}>{this.props.text}</a></li>
        </React.Fragment>
        )
    }
}

export default ColumnLink;