import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

const Navigation = () => {
    return (
        <nav>
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
            <Link to="/" id='title' ReachLink>MV Hacks</Link>
            <div className='links'>
                {/* in vanilla js, you may use <a/> tag, but <Link/> is more efficient in this case because it keeps everything on the same page and so is faster */}
                <Link to="/">
                    Home
                </Link>
                <Link to="/page-2">
                    Page-2
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;