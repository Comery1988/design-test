import React from "react";

class Textbox extends React.Component {
    render(){
        return (
        <React.Fragment>
            <div className="search">
                <input type="text" placeholder="&#8981; Search" />
            </div>
        </React.Fragment>
        )
    }
}

export default Textbox;