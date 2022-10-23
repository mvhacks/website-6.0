import React from 'react';
import { Link } from 'gatsby';
import { themeObj } from '../utils/customTheme';

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
            <p id='title' style={{ color: themeObj.dark.palette.accent.main }}>MV Hacks</p>
            <div className='links'>
                {/* in vanilla js, you may use <a/> tag, but <Link/> is more efficient in this case because it keeps everything on the same page and so is faster */}
                <Link to="/">
                    Home
                </Link>
                <Link to="/faq">
                    FAQ
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;