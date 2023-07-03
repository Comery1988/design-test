import React from "react";
import Dropdown from "./Dropdown";
import Textbox from "./Textbox";

class Filters extends React.Component {
    render(){
        return (
        <React.Fragment>
            <div className="container-filters">
                <div className="row">
                    <div className="col col-lg-3">
                        <Dropdown text={"Select a game"} icon={"images/icons/sword.png"} class={"dropdown"}/>
                    </div>
                    
                    <div className="col col-lg-5">
                        <Textbox />
                    </div>
                    
                    <div className="col col-lg-2">
                        <Dropdown small={"Price"} text={"All"} icon={"images/icons/bag.png"} class={"dropdown"} type={"dbl"}/>
                    </div>
                    
                    <div className="col col-lg-2">
                        <Dropdown small={"Item type"} text={"All"} icon={"images/icons/feather.png"} class={"dropdown"} type={"dbl"}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Filters;