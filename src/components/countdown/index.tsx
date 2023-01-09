import React from 'react';
import './styles.scss';
import { themeObj } from '../../utils/customTheme';
import { useState, useEffect } from 'react';

// I'll fix this when I have time later -- I know the logic and whatever if flawed and failing terribly rn.
interface timeProps {
  currentTime: Date;
  timeOfEvent: Date;
}

const getTimeLeft = ({ currentTime, timeOfEvent }: timeProps) => {
    const timeDifferenceMinutes = (currentTime.getTime() - timeOfEvent.getTime()) / 1000 * 60; // divide by 1000 x 60 bc it's in milliseconds
    const daysLeft = timeDifferenceMinutes % (60 * 24); //  minutes in an hour x hours in a day
    const hoursLeft = (timeDifferenceMinutes - daysLeft * 60 * 24) % 60;
    const minutesLeft = (timeDifferenceMinutes - daysLeft * 60 * 24 - hoursLeft * 60);

    return [daysLeft, hoursLeft, minutesLeft];
}

interface eventDateProps {
    year: number;
    month: number;
    day: number;
    hour: number;
}

const Countdown = ({ year, month, day, hour }: eventDateProps) => {
    // const [year, month, day] = eventDate;
    console.log(year, month, day);
    const timeOfEvent = new Date(year, month, day); 
    const [currentTime, setCurrentTime] = useState(new Date());
    // const currentTime = new Date();

    const [timeLeft, setTimeLeft] = useState(getTimeLeft({currentTime, timeOfEvent}))
    // const [daysLeft, hoursLeft, minutesLeft] = getTimeLeft({currentTime, timeOfEvent});
    // const [days, setDays] = useState(daysLeft);
    // const [hours, setHours] = useState(hoursLeft);
    // const [minutes, setMinutes] = useState(minutesLeft);
    const [time, setTime] = useState(60); // set the initial time to 60 seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(() => new Date());
            setTimeLeft(() => getTimeLeft({currentTime, timeOfEvent}));
    }, 60000); // run the interval every 60000 milliseconds (1 minute)
    }, []); // only run the effect once

    return (
    <div style={{padding:"30vh", background: themeObj.dark.palette.primary.main, color: themeObj.dark.palette.secondary.main}}>
        {timeLeft[0]} days {timeLeft[1]} hours {timeLeft[2]} seconds remaining
    </div>
    );
};

export default Countdown;
