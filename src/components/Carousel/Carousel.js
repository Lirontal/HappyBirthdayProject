import React, { useState, useEffect } from 'react';
import "./Carousel.css";
import {
    Carousel,
    CarouselItem,
} from 'reactstrap';
import pic1 from '../../images/carouselImages/1.jpeg';
import pic2 from '../../images/carouselImages/2.jpeg';
import pic3 from '../../images/carouselImages/3.jpeg';

const CarouselComponent = () => {
    const items = [
        {
            src: pic1,
            altText: 'Slide One'
        },
        {
            src: pic2,
            altText: 'Slide Two'
        },
        {
            src: pic3,
            altText: 'Slide Three'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);


    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="carouselImg" />
                <h3>{item.altText}</h3>
            </CarouselItem>
        );
    });

    const previousButton = () => {
        //  if (animating) return;
        const nextIndex = activeIndex === 0 ?
            items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Next button for Carousel
    const nextButton = () => {
        console.log(activeIndex);
        // if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ?
            items.length : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={nextButton}
                previous={previousButton}
                keyboard={false}
                pause={false}
                ride="carousel"
                interval={2000}
                className="carousel-fade"
            >
                {carouselItemData}
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
