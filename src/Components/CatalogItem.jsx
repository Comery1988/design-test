import React from "react";
import Button from "./AppButton";

class CatalogItem extends React.Component {
    render(){
        return (
        <React.Fragment>
            <div className="grid-item">
                <div className="grid-item-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <label className="item-onsale">{(this.props.onsale != undefined) ? <div className="dot"></div> : "" }<small>{this.props.onsale}</small></label><br />
                            <label className="item-instock">In stock</label>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <span className="number-input">
                                    <input type="number" className="item-quantity" min="1" value="1" />
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <img src={this.props.image} className="item-image" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-9">
                                <label className="item-name">{this.props.name}</label>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <img src={this.props.game} className="item-badge" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <label className="item-price">{this.props.price}<label className="old-price">{this.props.oldprice}</label></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <label className="item-description">
                                    {this.props.description}
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <Button class={"btn-details"} text={"Details"} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <Button class={"btn-add-cart"} text={"Add"} icon={"images/icons/shop-cart.png"} />
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
        )
    }
}

export default CatalogItem;