import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import './index.scss';
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/customTheme';
import { themeObj, buttonObj} from '../utils/customTheme';

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Seo
          title='Home'
          children={undefined}
        />
        {/* <StaticImage
          src="../images/MVHacksLogoMV.png"
          loading="eager"
          height={350}
          quality={95}
          alt="MV Hacks logo"
          style={{ margin: 20 }}
        /> */}
                {/* style={{
          background: themeObj.dark.palette.secondary.main,
          color: themeObj.dark.palette.primary.main, */}
        <div className='textCenter'>
          <div id='backgroundText' style={{color: themeObj.dark.palette.accent.secondary}}>
            2023
            <div id='foregroundText' style={{color: themeObj.dark.palette.secondary.main}}>MV Hacks 5.0</div>
            <div id='subtitle' style={{color: themeObj.dark.palette.secondary.main}}>
              The hackathon for everyone. Especially beginners.
            </div>
          </div>
          <Button
            variant='outline'
            // id='applyButton'
            // _hover={{ bg: 'blue.500', color: ' white' }}
          >
            <a href='#'>Apply today!</a>
          </Button>
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
    title='Home'
    children={undefined}
  />
);

export default IndexPage;
