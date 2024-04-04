import '../style/Home.css';
import React from 'react';
import Typewriter from "typewriter-effect";
import ParticlesContainer from '../components/Animation';
import Process from './Process';
import Services from './Services';
import Contact from './Contact';



const Home = () => {

  return (
    <div className="home-container">
      <ParticlesContainer />
      <div className="home">
        <div className="title">
          <p>WELCOME TO OUR WORLD</p>
          <h1>Hi, we are</h1>
        </div>

        <div className="job">
          <Typewriter
            options={{
              strings: ["Frontend Developer", "Web Designer", "Project Manager"],
              autoStart: true,
              loop: true, // Imposta il loop infinito
            }}
          />
        </div>
        <h3>Based in Italy</h3>
      </div>
      <Services/>
      <Process/>
      <Contact/>

    </div>
  );
}

export default Home;