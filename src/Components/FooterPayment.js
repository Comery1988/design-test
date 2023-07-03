import React from "react";

const FooterPayment = () => {
    return (
        <React.Fragment>
            <div className="payment">
                <div className="container">
                    <img src="images/payment/visa.png" />
                    <img src="images/payment/mastercard.png" />
                    <img src="images/payment/americanexpress.png" />
                    <img src="images/payment/skrill.png" />
                    <img src="images/payment/cryptos.png" />
                    <span> and 50+ more</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FooterPayment;