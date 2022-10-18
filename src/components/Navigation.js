import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
    return (
        <nav>
            <h1>MVHacks</h1>
            <div className='links'>
                {/* in vanilla js, you may use <a/> tag, but <Link/> is more efficient in this case because it keeps everything on the same page and so is faster */}
                <Link to="">
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