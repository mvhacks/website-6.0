import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import './index.scss';
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/customTheme';
import { themeObj } from '../utils/customTheme';
import Countdown from '../components/countdown';
import Timeline from '../components/timeline';
import PrizeMoney from '../components/prizeMoney';
import eventInfo from '../data/schedule.json';
import Banner from '../components/banner';

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Seo
          title="Home"
          children={undefined}
        />
        <div className="center">
          <div
            id="backgroundText"
            style={{ color: themeObj.dark.palette.accent.secondary }}
          >
            <span>2023</span>
            <div
              id="foregroundText"
              style={{ color: themeObj.dark.palette.secondary.main }}
            >
              MVHacks 6.0
            </div>
          </div>
          <div
            id="subtitle"
            style={{ color: themeObj.dark.palette.secondary.main }}
          >
            The hackathon for everyone. Especially beginners.
          </div>

          <Button variant="outline">
            <a href="https://forms.gle/gFxg3xjugR1dNhAv7" target='_blank'>Sign up now!</a>
          </Button>
          <Countdown
            year={2023}
            month={5}
            day={17}
            hour={8}
          ></Countdown>
          <PrizeMoney></PrizeMoney>
          <Timeline eventInfo={eventInfo}></Timeline>
          <Banner></Banner>
        </div>
      </Layout>
    </ChakraProvider>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo
    title="Home"
    children={undefined}
  />
);

export default IndexPage;
