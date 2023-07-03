import React from "react";

class AppLinkButton extends React.Component {
    render(){
        return (
        <React.Fragment>
            <a href="#"><img src={this.props.icon} /> {this.props.text}</a>
        </React.Fragment>
        )
    }
}

export default AppLinkButton;