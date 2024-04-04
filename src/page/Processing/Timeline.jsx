import React from "react";
import "./Timeline.css";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

function ProcessLeft() {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  return (
    <div className="container_timeline">
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline">
            <motion.div
              className="timeline"
              whileHover={{ scale: 1.1 }} // Animazione quando il mouse è sopra la timeline
              variants={variant}
              initial="hidden"
              whileInView="visible"
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {/* <i className="fa fa-globe"></i> */}
                </div>
                <h3 className="title">Web Designing</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer malesuada tellus lorem, et condimentum neque commodo
                  Integer malesuada tellus lorem, et condimentum neque commodo
                </p>
              </div>
            </motion.div>
            <motion.div
              className="timeline"
              whileHover={{ scale: 1.1 }} // Animazione quando il mouse è sopra la timeline
              variants={variant}
              initial="hidden"
              whileInView="visible"
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {/* <i className="fa fa-globe"></i> */}
                </div>
                <h3 className="title">Web Designing</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer malesuada tellus lorem, et condimentum neque commodo
                  Integer malesuada tellus lorem, et condimentum neque commodo
                </p>
              </div>
            </motion.div>
            <motion.div
              className="timeline"
              whileHover={{ scale: 1.1 }} // Animazione quando il mouse è sopra la timeline
              variants={variant}
              initial="hidden"
              whileInView="visible"
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {/* <i className="fa fa-globe"></i> */}
                </div>
                <h3 className="title">Web Designing</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer malesuada tellus lorem, et condimentum neque commodo
                  Integer malesuada tellus lorem, et condimentum neque commodo
                </p>
              </div>
            </motion.div>
            <motion.div
              className="timeline"
              whileHover={{ scale: 1.1 }} // Animazione quando il mouse è sopra la timeline
              variants={variant}
              initial="hidden"
              whileInView="visible"
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {/* <i className="fa fa-globe"></i> */}
                </div>
                <h3 className="title">Web Designing</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer malesuada tellus lorem, et condimentum neque commodo
                  Integer malesuada tellus lorem, et condimentum neque commodo
                </p>
              </div>
            </motion.div>
            {/* Repetere lo stesso modello per gli altri elementi */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessLeft;
