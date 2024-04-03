import React from "react";
import '../style/Navbar.css';
import LogoImg from "../asset/logo.png";

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                {/* <img src={LogoImg} alt="logo" className="" /> */}
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={LogoImg} className="logo d-inline-block align-text-top" />
                        Web Wizards
                    </a>
                </div>
            </nav>

            <div className="navbar navbar-light bg-light ">  
                    <button className="btn btn-outline-success me-2 btn_contact" type="button"> Contact! </button>
            </div>

        </header>
    )
};

export default Header;
