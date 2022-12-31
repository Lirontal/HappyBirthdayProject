import React, { useState, useEffect, useLayoutEffect } from 'react';
import "./CarouselPage.css";
import CarouselComponent from "../Carousel/Carousel";
import pic1 from '../../images/carouselImages/1.jpeg';
import pic2 from '../../images/carouselImages/2.jpeg';
import pic3 from '../../images/carouselImages/3.jpeg';

const CarouselPage = () => {

  const pictures = [
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
  return (
    <div className="carouselPage">
        <div className="carouselContainer">
          <CarouselComponent {...{pictures}} />
        </div>
    </div>
  );
};

export default CarouselPage;
