import React from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

const PrizeMoney = () => {
  return (
   <h1 style={{color: themeObj.dark.palette.secondary.main, padding: "15vh", fontSize: "52px"}}>More than x in prize money</h1>
  );
};

export default PrizeMoney;
