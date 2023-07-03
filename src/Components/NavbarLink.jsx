import React from "react";

class NavbarLink extends React.Component {
    render(){
        return (
        <React.Fragment>
            <a href={this.props.url}>{this.props.text} <img src="images/icons/arrow-down.png" /></a>
        </React.Fragment>
        )
    }
}

export default NavbarLink;