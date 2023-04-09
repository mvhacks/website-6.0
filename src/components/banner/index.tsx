import React, { useState } from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

const Banner = () => {
    console.log("Hii");
    return (
        <div style={{ background: themeObj.dark.palette.accent.main, display: "flex", textAlign: "center", justifyContent: "center", width: "100%", height: "60vh", flexDirection: 'column', alignItems: "center" }}>
            <div>
                <h1 style={{color: themeObj.dark.palette.primary.main, fontSize: "48px", paddingBottom: "5vh"}}>
                    Sponsors
                </h1>
            </div>
            <div className='banner'>
                <img src='/images/sponsors/genericComp.jpeg'></img>
                <img src='/images/sponsors/genericComp.jpeg'></img>
                <img src='/images/sponsors/genericComp.jpeg'></img>
                <img src='/images/sponsors/genericComp.jpeg'></img>
            </div>
        </div>
  );
};

export default Banner;


        {/* //     <h1 style={{color: themeObj.dark.palette.primary.main, fontSize: "64px", padding: "15vh", letterSpacing: "12px"}}>$1000 in prizes</h1> */}