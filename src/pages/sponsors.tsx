import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import './sponsors.scss';
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/customTheme';
import { themeObj } from '../utils/customTheme';
import sponsorInfo from '../images/sponsorInfo.png';
import Banner from "../components/banner";

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
                style={{ color: themeObj.dark.palette.secondary.main}}
            >
                Sponsor us!
            </h1>
            <div className='sponsorChart'>
                <img className='sponsorsImg' src={sponsorInfo} alt="Sponsor Info"/>
            </div>
          <Button
            variant="outline"
            style={{display:"block", marginBottom:"5vh", marginLeft:"auto", marginRight:"auto"}}
          >
            <a href="https://drive.google.com/file/d/1FyM05z4O_me3PSV0WxpTatO3uiGxedWk/view?usp=sharing" target='_blank'>Prospectus</a>
          </Button>
          <Button
            className='contactButton'
            variant="outline"
            style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
          >
            <a href="mailto:mihir@mvhacks.io?subject=Sponsoring%20MVHacks%206.0">Sponsor us!</a>
          </Button>
        </div>
        <Banner></Banner>
      </Layout>
    </ChakraProvider>
  );
};

export const Head = () => (
  <Seo
    title="Sponsors"
    children={undefined}
  />
);

export default SponsorsPage;
