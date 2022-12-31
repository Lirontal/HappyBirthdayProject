import React from 'react';
import "./FamilyCollage.css";
import { ReactPhotoCollage } from "react-photo-collage";

import pic1 from '../../images/carouselImages/1.jpeg';
import pic2 from '../../images/carouselImages/2.jpeg';
import pic3 from '../../images/carouselImages/3.jpeg';
import pic4 from '../../images/carouselImages/4.jpeg';
import pic5 from '../../images/carouselImages/5.jpeg';
import pic6 from '../../images/carouselImages/6.jpeg';
import pic7 from '../../images/carouselImages/7.jpeg';
import pic8 from '../../images/carouselImages/8.jpeg';
import pic9 from '../../images/carouselImages/9.jpeg';
import pic10 from '../../images/carouselImages/10.jpeg';
import pic11 from '../../images/carouselImages/11.jpeg';
import pic12 from '../../images/carouselImages/12.jpeg';

const FamilyCollage = () => {

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
        },
        {
            src: pic4,
            altText: 'Slide Three'
        },
        {
            src: pic5,
            altText: 'Slide Three'
        },
        {
            src: pic6,
            altText: 'Slide Three'
        },
        {
            src: pic7,
            altText: 'Slide Three'
        },
        {
            src: pic8,
            altText: 'Slide Three'
        },
        {
            src: pic9,
            altText: 'Slide Three'
        },
        {
            src: pic10,
            altText: 'Slide Three'
        },
        {
            src: pic11,
            altText: 'Slide Three'
        },
        {
            src: pic12,
            altText: 'Slide Three'
        }
    ];

    const setting = {
        width: '80vw',
        height: ['', '170px'],
        layout: [1, 4],
        photos: 
            pictures.map(pic => { return { source: pic.src } })
        ,
        showNumOfRemainingPhotos: true
    };

    return (
        <div className="carouselPage">
            <div className="carouselContainer">
            <ReactPhotoCollage {...setting} />

            </div>
        </div>
    );
};

export default FamilyCollage;
