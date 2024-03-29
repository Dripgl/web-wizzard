import React from 'react';
import "../style/Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (

        <div>

            <div className="text-center">
                <div className=" icon_cont">
                    <div className="space">
                        <button type="button" className="btn btn-primary btn-lg btn-floating btn_iconft rounded-circle" style={{ backgroundColor: '#0088cc' }}>
                            <i className="fab fa-telegram-plane"></i>
                        </button>
                    </div>
                    <div className="space">
                        <button type="button" className="btn btn-primary btn-lg btn-floating btn_iconft rounded-circle" style={{ backgroundColor: '#00ff99' }}>
                            <i className="fab fa-tiktok"></i>
                        </button>
                    </div>
                    <div className="space">
                        <button type="button" className="btn btn-primary btn-lg btn-floating btn_iconft rounded-circle" style={{ backgroundColor: '#bc2a8d' }}>
                            <i className="fab fa-instagram"></i>
                        </button>
                    </div>
                    <div className="space">
                        <button type="button" className="btn btn-primary btn-lg btn-floating btn_iconft rounded-circle" style={{ backgroundColor: '#333333' }}>
                            <i className="fab fa-github"></i>
                        </button>
                    </div>


                </div>

                <h3 className="f_cop1">
                    Only with code <FontAwesomeIcon className="icon_cod" icon={faLaptopCode} />
                </h3>

                <div className="f_cop">
                    <p className="text-center text-white p-3">
                        © 2024 Copyright: Privacy Policy
                    </p>
                </div>

            </div>

        </div>

    );
}

export default Footer;