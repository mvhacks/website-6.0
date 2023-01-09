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
    const timeDifferenceMinutes = (timeOfEvent.getTime() - currentTime.getTime()) / (1000 * 60); // divide by 1000 x 60 bc it's in milliseconds
    const daysLeft = Math.floor(timeDifferenceMinutes / (60 * 24)); //  minutes in an hour x hours in a day
    const hoursLeft = Math.floor((timeDifferenceMinutes - daysLeft * 60 * 24) / 60);
    const minutesLeft = Math.ceil((timeDifferenceMinutes - daysLeft * 60 * 24 - hoursLeft * 60));

    return [daysLeft, hoursLeft, minutesLeft];
}

interface eventDateProps {
    year: number;
    month: number;
    day: number;
    hour: number;
}

const Countdown = ({ year, month, day, hour }: eventDateProps) => {
    const timeOfEvent = new Date(year, month, day, hour, 0, 0); 

    const currentTime = new Date()
    const [timeLeft, setTimeLeft] = useState(getTimeLeft({currentTime, timeOfEvent}))

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date()
            setTimeLeft(() => getTimeLeft({ currentTime, timeOfEvent }));
        }, 1000); // run the interval every 1000 milliseconds (1 second)
        return () => clearInterval(interval);
    }, []); // only run the effect once

    return (
    <div style={{padding:"30vh", background: themeObj.dark.palette.primary.main, color: themeObj.dark.palette.secondary.main}}>
        {timeLeft[0]} days {timeLeft[1]} hours {timeLeft[2]} minutes remaining
    </div>
    );
};

export default Countdown;
