import React, { useState } from 'react';
import "./Carousel.css";
import {
    Carousel,
    CarouselItem,
} from 'reactstrap';

const CarouselComponent = ({ pictures }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const carouselItemData = pictures.map((item) => {
        return (
            <CarouselItem
                key={item.src}
            >
                <div className="carouselImageContent">
                    <img src={item.src} alt={item.altText} className="carouselImg" />
                    <h3 className="carouselTxt">{item.altText}</h3>
                </div>
            </CarouselItem>
        );
    });

    const previousButton = () => {
        //  if (animating) return;
        const nextIndex = activeIndex === 0 ?
            pictures.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Next button for Carousel
    const nextButton = () => {
        console.log(activeIndex);
        if(activeIndex === pictures.length - 1) return;
        const nextIndex = activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const getNextIntervalTime = ()=> {
        return pictures[activeIndex].interval ?? 2000
    }
    return (
        <Carousel
            activeIndex={activeIndex}
            next={nextButton}
            previous={previousButton}
            keyboard={false}
            pause={false}
            ride="carousel"
            interval={getNextIntervalTime()}
            className="carousel-fade"
        >
            {carouselItemData}
        </Carousel>
    );
};

export default CarouselComponent;
