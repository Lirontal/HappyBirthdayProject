import React from 'react';
import "./LironVideo.css";
import ReactPlayer from 'react-player'

import video from "../../videos/liron-wish.mp4"

const LironVideo = () => {
    return (
        <div className="carouselPage">
            <div className="carouselContainer">
            <ReactPlayer url={video} controls stopOnUnmount={false} />

            </div>
        </div>
    );
};

export default LironVideo;
