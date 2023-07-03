import React from "react";
import Filters from "../../Components/Filters";
import CatalogHeader from "../../Components/CatalogHeader";
import CatalogBody from "../../Components/CatalogBody";
import CatalogFooter from "../../Components/CatalogFooter";

class Content extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="main-content">
                    <div className="container">
                        <h1>{this.props.title}</h1>
                        <Filters />
                        <div className="container-catalog">
                            <CatalogHeader />
                            <CatalogBody />
                            <CatalogFooter />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Content;