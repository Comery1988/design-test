import React from "react";
import FooterPayment from "../../Components/FooterPayment";
import FooterSocial from "../../Components/FooterSocial";
import FooterCols from "../../Components/FooterCols";
import FooterCopy from "../../Components/FooterCopy";

const Footer = () => {
    return (
        <React.Fragment>
        <footer>
            <FooterPayment />
            <FooterSocial />
            <FooterCols />
            <FooterCopy />
        </footer>
        </React.Fragment>
    )
}

export default Footer;