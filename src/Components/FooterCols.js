import React from "react";
import AppLogo from "./AppLogo";
import ColumnLink from "./ColumnLink";

const FooterCols = () => {
    return (
        <React.Fragment>
            <div className="footer-menu">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12">
                            <AppLogo />
                            <small>support@Chicksgold.com</small>
                        </div>    
                        
                        <div className="col col-lg-2 col-md-6 col-sm-12">
                            <h3 className="footer-title">Chicks Gold</h3>
                            <ul className="footer-list">
                                <ColumnLink text={"Games"} url={"#"} />
                                <ColumnLink text={"About Us"} url={"#"} />
                                <ColumnLink text={"Blog"} url={"#"} />
                                <ColumnLink text={"Sitemap"} url={"#"} />
                            </ul>
                        </div> 

                        <div className="col col-lg-2 col-md-6 col-sm-12">
                            <h3 className="footer-title">Support</h3>
                            <ul className="footer-list">
                                <ColumnLink text={"Contact Us"} url={"#"} />
                                <ColumnLink text={"FAQ"} url={"#"} />
                            </ul>
                        </div>    

                        <div className="col col-lg-2 col-md-6 col-sm-12">
                            <h3 className="footer-title">Legal</h3>
                            <ul className="footer-list">
                                <ColumnLink text={"Privacy Policy"} url={"#"} />
                                <ColumnLink text={"Terms of Service"} url={"#"} />
                                <ColumnLink text={"Copyright Policy"} url={"#"} />
                            </ul>
                        </div>    
                        <div className="col col-lg-3 col-md-6 col-sm-12">
                            <div className="review">
                                <img src="images/icons/star.png" />
                                <img src="images/icons/star.png" />
                                <img src="images/icons/star.png" />
                                <img src="images/icons/star.png" />
                                <img src="images/icons/star.png" />
                                <label>Trustpilot Reviews</label>
                            </div>
                        </div>   
                    </div>
                </div> 
            </div>
        </React.Fragment>
    )
}

export default FooterCols;