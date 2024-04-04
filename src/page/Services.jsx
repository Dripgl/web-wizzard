import React from "react";
import "../style/Services.css"
import GabriImg from "../asset/gabri.png"
import GiuliaImg from "../asset/giulia.png"

export const Services = (props) => {
    return (

        <div className="services-container">
            <div className="about">
                <img className="img_cont" src={GabriImg} alt="gabri"/>   
            </div>
            <div>
              <h1 className="title">DEVELOPER/PM</h1>  
            </div>
            
            <div className="about">
                <img className="img_cont" src={GiuliaImg} alt="gabri"/>
            </div>

            <div>
              <h1 className="title">WEB DESIGNER</h1>  
            </div>
        </div>
    )
}

export default Services;