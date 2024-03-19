import React from "react";
import "../style/Projects.css"
import { cardDetails } from "../components/Carousel-config";
import CarouselItem from "../components/CarouselItem";
import blue from "../asset/blue.gif";
import Vitamin from "../asset/Vitamin.gif";


const Project = () => {
    return (
        <div className="project">
            <div className="carousel-track">

                <CarouselItem gifs={[blue, Vitamin]} imgTitle="Titolo del video 1" />
                {/* <CarouselItem gif={Vitamin} imgTitle="Titolo del video 1" /> */}

            </div>
        </div>
    )
}

export default Project;
