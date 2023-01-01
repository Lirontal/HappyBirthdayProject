import React, { useContext } from 'react';
import "./Menu.css";
import cake from "../../videos/20thBD.mp4"

import ReactPlayer from 'react-player/lazy'
import { GlobalContext } from '../../contexts/GlobalContext';

const Menu = () => {
    const {volume} = useContext(GlobalContext);
    return (
        <div className="carouselPage">
            <div className="carouselContainer">
                <div>
                <ReactPlayer
                    url={cake}
                    playing={true}
                    loop={true}
                    controls={false}
                    volume={volume} />
                    </div>
            </div>
        </div>
    );
};
export default Menu;
