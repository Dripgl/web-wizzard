import React, { useState, useEffect } from "react";
import "../style/Projects.css";

function CarouselItem({ imgTitle, gifs }) {

  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [gifs.length]);

  return (
    <div className={`carousel-card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>

      <div className="front">
        {gifs.map((gif, index) => (
          <img
            key={index}
            src={gif}
            alt={`GIF ${index}`}
            style={{ display: index === currentGifIndex ? "block" : "none" }}
            className="carousel-gif" />
        ))}
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
