import React from 'react';
import './layout.scss';
import Navigation from '../Navigation';
import { themeObj } from '../../utils/customTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className='layout'
      style={{ background: themeObj.dark.background }}
    >
      <div className='content-wrapper'>
        <Navigation />
        <div className='content'>{children}</div>
      </div>
      <footer className='footer'>
        <p>
          center pic here of mvhacks 4.5 winners, instagram, anything else??
        </p>
      </footer>
    </div>
  );
};

export default Layout;
