import React from "react";
import Dropdown from "./Dropdown";

class CatalogHeader extends React.Component {
    render(){
        return (
        <React.Fragment>
            <div className="catalog-header">
                <div>Showing 20 - from 125</div>
                <div>
                    <Dropdown small={"Sort By"} text={"Featured"} icon={"images/icons/filter.png"} class={"dropdown sort-by"} type={"dbl"}/>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default CatalogHeader;