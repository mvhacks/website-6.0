import React from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

const DateBanner = () => {
  return (
    <div
      style={{
        background: themeObj.dark.palette.accent.main,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '15vh',
      }}
    >
      <h1
        className="dateBanner"
        style={{ color: themeObj.dark.palette.primary.main }}
      >
        Join us virtually on June 17th!
      </h1>
    </div>
  );
};

export default DateBanner;
