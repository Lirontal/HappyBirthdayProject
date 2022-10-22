import React from 'react';
import "./Countdown.css";

const Countdown = ({ countdownData, name }) => {
    if (!countdownData.isItBday) {
        return (
            <div>
                <h1 className='heading'>
                    הספירה לאחור עד יום ההולדת של  <span className='highlight'>{name}</span>
                </h1>
                <div className='countdown-wrapper'>
                    <div className='countdown-box'>
                        {countdownData.days}
                        <span className='legend'>ימים</span>
                    </div>
                    <div className='countdown-box'>
                        {countdownData.hours}
                        <span className='legend'>שעות</span>
                    </div>
                    <div className='countdown-box'>
                        {countdownData.minutes}
                        <span className='legend'>דקות</span>
                    </div>
                    <div className='countdown-box'>
                        {countdownData.seconds}
                        <span className='legend'>שניות</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>birthday!!!!!!!!!!!!11</div>;
    }
};

export default Countdown;
