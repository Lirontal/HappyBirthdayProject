import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from '../../Countdown/Countdown';
import "./TimeCounter.css";

const TimeCounter = ({ name = "רעותי", day = 22, month = 3 }) => {
  const navigate = useNavigate()
  // useState Hooks
  const [state, setState] = useState();

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  // Getting the Birthday in Data Object
  // WE subtract 1 from month ; Months start from 0 in Date Object
  // Bithday Boolean
  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  function daysUntilNext(month, day) {
    const today = new Date();
    const bday = new Date(today.getFullYear(), month - 1, day);
    if (today.getTime() > bday.getTime()) {
      bday.setFullYear(bday.getFullYear() + 1);
    }
    const diff = bday.getTime() - today.getTime();
    return diff;
  }

  useLayoutEffect(() => {
    setInterval(() => {
      isItBday && navigate("/today")
      const countdown = () => {
        const timeRemaining = daysUntilNext(month, day)

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday,
        }));
      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month]);

  const birth = new Date(currentYear, month - 1, day);
  const monthNames = [
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר',
  ];
  const monthBday = monthNames[birth.getMonth()];

  return (
    <div className='page'>
      {state && <>
        <Countdown countdownData={state} name={name} />
        <div className='birthdate'>
          יום הולדת: {day} {monthBday} {currentYear}
        </div>
      </>}
    </div>
  );
};

export default TimeCounter;
