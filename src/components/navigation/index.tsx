import React from 'react';
import { Link } from 'gatsby';
import { themeObj } from '../../utils/customTheme';
import './styles.scss';

const Navigation = () => {
  return (
    <nav style={{ backgroundColor: themeObj.dark.palette.secondary.main }}>
      {/* need to add static image logo to nav bar as header instead of using text */}
      {/* <StaticImage
        src="../images/MVHacksLogoMV.png"
        loading="eager"
        height={5}
        width={5}
        quality={95}
        alt="MV Hacks logo"
        style={{ margin: 0 }}
      /> */}
      <p
        id='title'
        style={{ color: themeObj.dark.palette.accent.main }}
      >
        MV Hacks
      </p>
      <div className='links'>
        <Link
          to='/'
          className='link'
        >
          Home
        </Link>
        <Link
          to='/faq'
          className='link'
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
