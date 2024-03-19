import React from "react";
import CarouselItem from "./CarouselItem";
import blue from "../asset/blue.gif";
import "../style/Projects.css";

function cardDetails() {
  const videos = [
    { video: blue, title: "Video 1" },
    // { video: video2, title: "Video 2" }
    // Aggiungi altri video se necessario
  ];

  return (
    <div className="carousel-container">
      {videos.map((item, index) => (
        <CarouselItem key={index} video={item.video} title={item.title} />
      ))}
    </div>
  );
}

export default cardDetails;
