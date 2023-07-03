import React from "react";
import AppLogo from "../../Components/AppLogo";
import NavbarLink from "../../Components/NavbarLink";
import AppLinkButton from "../../Components/AppLinkButton";
import AppButton from "../../Components/AppButton";

const Header = () => {
    return (
        <React.Fragment>
        <nav className="navbar">
            <AppLogo />
            <div className="divider"></div>
            <div className="navbar-main">
                <NavbarLink text="Currency" url="#" />
                <NavbarLink text="Items" url="#" />
                <NavbarLink text="Accounts" url="#" />
                <NavbarLink text="Services" url="#" />
                <NavbarLink text="Swap" url="#" />
                <NavbarLink text="Sell" url="#" />
            </div>
            <div className="navbar-user">
                <NavbarLink text="Usd" url="#" />
                <AppLinkButton text={"Cart (5)"} icon={"images/icons/shop-cart.png"} />
                <AppButton text={"Sing In"} class={"btn-singin"} icon={"images/icons/profile.png"} url={"#"} />
            </div>
        </nav>
        </React.Fragment>
    )
}

export default Header;