import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import './index.scss';
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/customTheme';
import { themeObj } from '../utils/customTheme';
import sponsorInfo from '../images/sponsorInfo.png';

const SponsorsPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Seo
          title="Sponsors"
          children={undefined}
        />
        <div>
            <h1
                className="titleStyle"
                style={{ color: themeObj.dark.palette.secondary.main, fontSize: "5vw" }}
            >
                Sponsor us!
            </h1>
            <div style={{display:"flex", justifyContent:"center", alignItems: "center", margin:"10vh"}}>
                <img src={sponsorInfo} alt="Sponsor Info" style={{maxWidth:"90%"}}/>
            </div>

            <a href="https://drive.google.com/file/d/1FyM05z4O_me3PSV0WxpTatO3uiGxedWk/view?usp=sharing" target="_blank" style={{color:themeObj.dark.palette.accent.main, display:"flex", justifyContent:"center", alignItems: "center", padding:"5vh"}}>Click to see prospectus</a>  
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
    title="Sponsors"
    children={undefined}
  />
);

export default SponsorsPage;
