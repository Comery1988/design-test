import React from "react";

class Dropdown extends React.Component {
    render(){
        return (
        <React.Fragment>
            <div className={this.props.class} >
                <button className={(this.props.type == "dbl") ? "dropbtn dropbtn-dbl" : "dropbtn" } >
                    <img src={this.props.icon} className={(this.props.type == "dbl") ? "btn-icon-dbl" : "btn-icon" } />
                    <small>{this.props.small}</small>
                    {(this.props.type == "dbl") ? <br /> : ""}
                    {this.props.text}
                </button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>


            
                  
        </React.Fragment>
        )
    }
}

export default Dropdown;