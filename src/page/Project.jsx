import React from "react";
import "../style/Projects.css"
import { cardDetails } from "../components/Carousel-config";
import CarouselItem from "../components/CarouselItem";
import ReactPlayer from "react-player";

const Project = () => {
    return (
        <div className="project">
            <div className="carousel-track">
                {Object.keys(cardDetails).map((detailKey) => (
                    <CarouselItem
                        key={detailKey}
                        imgUrl={cardDetails[detailKey].imgUrl}
                        imgTitle={cardDetails[detailKey].title}
                    />    
                ))}
            </div>
        </div>
    )
}

export default Project;
