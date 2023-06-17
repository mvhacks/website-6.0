import React from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

const Banner = () => {
  return (
    <div
      style={{
        background: themeObj.dark.palette.accent.main,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div>
        <h1
          className="sponsorsText"
          style={{ color: themeObj.dark.palette.primary.main }}
        >
          Sponsors
        </h1>
      </div>
      <div className="banner">
        <img src="/images/sponsors/balsamic_logo.png"></img>
        <img src="/images/sponsors/echoAR.png"></img>
      </div>
    </div>
  );
};

export default Banner;

/* //     <h1 style={{color: themeObj.dark.palette.primary.main, fontSize: "64px", padding: "15vh", letterSpacing: "12px"}}>$1000 in prizes</h1> */
