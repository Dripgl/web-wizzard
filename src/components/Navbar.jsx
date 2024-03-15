import React from "react";
import '../style/Navbar.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        {/* <img src="" width="30" height="24" className="d-inline-block align-text-top"/> */}
                        Web Wizards
                    </a>
                </div>
            </nav>

            {/* <div className="btn" >
                <button>
                    <Link className="nav_link " to={`/Admin`}>
                        Vote us!</Link>
                </button>
            </div> */}
            
        </header>
    )
};

export default Header;
