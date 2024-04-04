import React from "react";
import "./Timeline.css"
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";


function ProcessLeft() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline">
                        <motion.div
                            className="timeline"
                            whileInView={{ scale: 1.2 }} // Animazione quando l'elemento è nella vista
                        >
                            <div href="#" className="timeline-content">
                                <div className="timeline-icon">
                                    {/* <i className="fa fa-globe"></i> */}
                                </div>
                                <h3 className="title">Web Designing</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer males uada tellus lorem, et condimentum neque commodo
                                    Integer males uada tellus lorem, et condimentum neque commodo
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="timeline"
                            whileInView={{ scale: 1.2 }} // Animazione quando l'elemento è nella vista
                        >
                            <div href="#" className="timeline-content">
                                <div className="timeline-icon">
                                    {/* <i className="fa fa-globe"></i> */}
                                </div>
                                <h3 className="title">Web Designing</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer males uada tellus lorem, et condimentum neque commodo
                                    Integer males uada tellus lorem, et condimentum neque commodo
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="timeline"
                            whileInView={{ scale: 1.2 }} // Animazione quando l'elemento è nella vista
                        >
                            <div href="#" className="timeline-content">
                                <div className="timeline-icon">
                                    {/* <i className="fa fa-globe"></i> */}
                                </div>
                                <h3 className="title">Web Designing</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer males uada tellus lorem, et condimentum neque commodo
                                    Integer males uada tellus lorem, et condimentum neque commodo
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="timeline"
                            whileInView={{ scale: 1.2 }} // Animazione quando l'elemento è nella vista
                        >
                            <div href="#" className="timeline-content">
                                <div className="timeline-icon">
                                    {/* <i className="fa fa-globe"></i> */}
                                </div>
                                <h3 className="title">Web Designing</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer males uada tellus lorem, et condimentum neque commodo
                                    Integer males uada tellus lorem, et condimentum neque commodo
                                </p>
                            </div>
                        </motion.div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProcessLeft;
