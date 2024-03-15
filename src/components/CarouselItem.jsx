import React, { useState } from "react";
import "../style/Projects.css"

function CarouselItem({ imgUrl, imgTitle }) {

  const [flipped, setFlipped] = useState(false); // Stato per tenere traccia se la card è "ruotata" o meno

  const handleFlip = () => {
    setFlipped(!flipped); // Inverte lo stato di "flipped" quando viene cliccato
  };
  return (
    <div className={`carousel-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">
        {/* Contenuto della parte anteriore della card */}
        <img src={imgUrl} alt={imgTitle} />
        <h2>{imgTitle}</h2>
      </div>
      <div className="back">
        {/* Contenuto della parte posteriore della card */}
        <p>Descrizione o altro contenuto posteriore</p>
      </div>
    </div>
  );
}

export default CarouselItem;