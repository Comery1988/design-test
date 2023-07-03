import React from "react";

class AppButton extends React.Component {
    render(){
        return (
        <React.Fragment>
            <button className={this.props.class}>{this.props.text} {(this.props.icon != undefined) ? <img src={this.props.icon} /> : "" } </button>
        </React.Fragment>
        )
    }
}

export default AppButton;