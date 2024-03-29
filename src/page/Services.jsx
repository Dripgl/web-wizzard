import React from "react";
import "../style/Services.css"

export const Services = (props) => {
    return (
        <section className="services-container">
            <div className="row">
                
                {/* 1 item */}
                <div className="service-item">
                    <div className="service-icon">
                        <svg className="w-16 h-16">
                            {/* Inserisci qui il codice per l'icona */}
                        </svg>
                    </div>
                    <h4 className="services_title">Canva</h4>
                    <p className="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>

                {/* 2 item */}
                <div className="service-item">
                    <div className="service-icon">
                        <svg className="w-16 h-16">
                            {/* Inserisci qui il codice per l'icona */}
                        </svg>
                    </div>
                    <h4 className="services_title">Web App</h4>
                    <p className="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>

                <div className="service-item">
                    <div className="service-icon">
                        <svg className="w-16 h-16">
                            {/* Inserisci qui il codice per l'icona */}
                        </svg>
                    </div>
                    <h4 className="services_title">SMM</h4>
                    <p className="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
            </div>

        </section>


    )
}
export default Services;