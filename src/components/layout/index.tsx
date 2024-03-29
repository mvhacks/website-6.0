import React from 'react';
import './layout.scss';
import Navigation from '../navigation';
import { themeObj } from '../../utils/customTheme';
import insta_logo from '../../images/insta_logo.png';
import { Button } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="layout"
      style={{ background: themeObj.dark.palette.primary.main }}
    >
      <div className="content-wrapper">
        <Navigation />
        <div className="content">{children}</div>
      </div>
      <footer
        className="footer"
        style={{
          background: themeObj.dark.palette.primary.main,
          color: themeObj.dark.palette.secondary.main,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <a
          href="https://www.instagram.com/mvhacks/"
          target="_blank"
          style={{ width: '100%' }}
        >
          <img
            src={insta_logo}
            alt="logo"
            style={{ width: '4vh', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </a>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'column' }}>
          <Button
            variant="outline"
            style={{ marginTop: '15px' }}
          >
            <a
              href="mailto:contact@mv-hacks.com"
            >
              Contact us!
            </a>
          </Button>
          <Button
            variant="outline"
            style={{ marginTop: '15px', justifyContent: "center"}}
          >
          <a
              href="https://mvhacks-4-5.devpost.com/?"
              target="_blank"
            >
              Check out our 4.5 winners!
            </a>
          </Button>
          <Button
            variant="outline"
            style={{ marginTop: '15px', justifyContent: "center"}}
          >
          <a
              href="https://www.mvhacks.dev/"
              target="_blank"
            >
              Updated MVHacks Website
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
