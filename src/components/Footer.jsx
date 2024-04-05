import React from 'react';
import "../style/Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import LogoImg from "../asset/logo.png"


const Footer = () => {

    const ClickToChatWithMessage = () => {
        const phoneNumber = "+393294369945"; // Numero di telefono in formato internazionale
        const encodedMessage = encodeURIComponent("Ciao! Vorrei prenotare una call conoscitiva"); // Messaggio precompilato codificato
      
        const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;

    return (
        <div className="space">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-primary btn-lg btn-floating btn_iconft rounded-circle" style={{ backgroundColor: '#25d366' }}>
              <i className="fab fa-whatsapp"></i>
            </button>
          </a>
        </div>
      );
    }
    

    return (

        <div>

            <div className="text-center">
                <div className="icon_cont">
                    <img className="logo_footer" src={LogoImg} alt="logo" />
                    <div className="space">
                        <button type="button" className="btn btn-primary btn-lg btn-floating btn_iconft rounded-circle" style={{ backgroundColor: '#0088cc' }}>
                            <i className="fab fa-telegram-plane"></i>
                        </button>
                    </div>
                    <ClickToChatWithMessage />
                    <div className="space">
                        <a href="https://github.com/Dripgl?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-primary btn-lg btn-floating btn_iconft rounded-circle" style={{ backgroundColor: '#333333' }}>
                                <i className="fab fa-github"></i>
                            </button>
                        </a>
                    </div>
                </div>

                <h3 className="f_cop1">
                    Only with code <FontAwesomeIcon className="icon_cod" icon={faLaptopCode} />
                </h3>

                <div className="f_cop">
                    <p className="text-center text-black p-3">
                        © 2024 Copyright: Privacy Policy
                    </p>
                </div>

            </div>

        </div>

    );
}

export default Footer;