import * as React from 'react';

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

// import {useState} from 'react';

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
            2023
            <div
              id="foregroundText"
              style={{ color: themeObj.dark.palette.secondary.main }}
            >
              MV Hacks 6.0
            </div>
            <div
              id="subtitle"
              style={{ color: themeObj.dark.palette.secondary.main }}
            >
              The hackathon for everyone. Especially beginners.
            </div>
          </div>
          <Button
            variant="outline"
          >
            <a href="#">Apply today!</a>
          </Button>
          <Countdown year={2023} month={2} day={1} hour={9}></Countdown>
          <Timeline eventInfo={eventInfo}></Timeline>
          <PrizeMoney></PrizeMoney>
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
