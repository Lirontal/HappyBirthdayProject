import React from 'react';
import "./Button.scss";

const Button = ({ style = 'btn4', onClick = () => { }, text = "למסך הבא" }) => {

    const className = `btn ${style}`;
    return (
        <button {...{ className, onClick }}
        >{text}
        </button>
    );
};

export default Button;
