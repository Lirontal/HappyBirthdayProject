import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import "./SoundIcon.css";
import { ReactComponent as Sound } from "../../images/sound/volume.svg"
import { ReactComponent as Mute } from "../../images/sound/mute.svg";

const Menu = () => {
    const { volume, setVolume } = useContext(GlobalContext);
    const size = 30
    const sizes = { height: size, width: size }
    const onClickIcon = () => {
        setVolume(prev => prev ? 0 : 1)
    }
    return (
        <div className="soundIcon" onClick={onClickIcon}>
            {volume ? <Sound {...sizes} /> : <Mute {...sizes} />}
        </div>
    );
};
export default Menu;
