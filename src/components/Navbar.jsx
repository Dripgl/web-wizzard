import React from "react";
import '../style/Navbar.css';
import LogoImg from "../asset/logo.png";

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
               
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={LogoImg} className="logo d-inline-block align-text-top" />
                        Web Wizards
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;
