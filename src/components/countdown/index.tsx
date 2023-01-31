import React from 'react';
import './styles.scss';
import { themeObj } from '../../utils/customTheme';
import { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { display } from '@mui/system';

// I'll fix this when I have time later -- I know the logic and whatever if flawed and failing terribly rn.
interface timeProps {
  currentTime: Date;
  timeOfEvent: Date;
}

const getTimeLeft = ({ currentTime, timeOfEvent }: timeProps) => {
  const timeDifferenceMinutes = (timeOfEvent.getTime() - currentTime.getTime()) / (1000 * 60); // divide by 1000 x 60 bc it's in milliseconds
  const daysLeft = Math.floor(timeDifferenceMinutes / (60 * 24)); //  minutes in an hour x hours in a day
  const hoursLeft = Math.floor((timeDifferenceMinutes - daysLeft * 60 * 24) / 60);
  const minutesLeft = Math.ceil(timeDifferenceMinutes - daysLeft * 60 * 24 - hoursLeft * 60);

  return [daysLeft, hoursLeft, minutesLeft];
};

interface eventDateProps {
  year: number;
  month: number;
  day: number;
  hour: number;
}

const Countdown = ({ year, month, day, hour }: eventDateProps) => {
  const timeOfEvent = new Date(year, month, day, hour, 0, 0);

  const currentTime = new Date();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft({ currentTime, timeOfEvent }));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTimeLeft(() => getTimeLeft({ currentTime, timeOfEvent }));
    }, 1000); // run the interval every 1000 milliseconds (1 second)
    return () => clearInterval(interval);
  }, []); // only run the effect once

  function getPercentage(current, maximum) {
    const percentage = 100 - Math.round(100 * (current / maximum));
    return percentage;
  }

  const hoursPercentage = getPercentage(timeLeft[1], 24);
  const dayPercentage = getPercentage(timeLeft[0], 30.5);
  const minutesPercentage = getPercentage(timeLeft[2], 60);

  const circularProgressStyles = buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.5,
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
    // Text size
    textSize: '16px',
    // Colors
    pathColor: themeObj.dark.palette.primary.main,
    textColor: themeObj.dark.palette.secondary.main,
    trailColor: themeObj.dark.palette.accent.main
  });

  return (
    <>
      <div
        style={{
          paddingTop: '20vh',
          background: themeObj.dark.palette.primary.main,
          color: themeObj.dark.palette.secondary.main,
          margin: 0
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '10vh',
            gap: '6.5rem'
          }}
        >
          {/* display: "grid", gridTemplateColumns: "repeat(3, 1fr)" */}
          <CircularProgressbarWithChildren
            value={dayPercentage}
            className="progressCircle"
            styles={circularProgressStyles}
          >
            <div style={{ fontSize: '128px' }}>{timeLeft[0]}</div>
            <div>Days</div>
          </CircularProgressbarWithChildren>
          <CircularProgressbarWithChildren
            value={hoursPercentage}
            className="progressCircle"
            styles={circularProgressStyles}
          >
            <div style={{ fontSize: '128px' }}>{timeLeft[1]}</div>
            <div>Hours</div>
          </CircularProgressbarWithChildren>
          <CircularProgressbarWithChildren
            value={minutesPercentage}
            className="progressCircle"
            styles={circularProgressStyles}
          >
            <div style={{ fontSize: '128px' }}>{timeLeft[2]}</div>
            <div>Minutes</div>
          </CircularProgressbarWithChildren>
        </div>
        {/* {timeLeft[0]} days {timeLeft[1]} hours {timeLeft[2]} minutes remaining */}
      </div>
    </>
  );
};

export default Countdown;
