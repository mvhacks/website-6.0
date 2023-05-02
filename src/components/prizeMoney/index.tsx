import React from 'react';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

const PrizeMoney = () => {
  return (
    <div
      style={{
        background: themeObj.dark.palette.accent.main,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <h1
        className="prizeMoney"
        style={{ color: themeObj.dark.palette.primary.main }}
      >
        $1000 in prizes
      </h1>
    </div>
  );
};

export default PrizeMoney;
