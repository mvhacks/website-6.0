import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import './index.scss';
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/customTheme';
import { themeObj } from '../utils/customTheme';
import sponsorInfo from '../images/sponsorInfo.png';



// import {useState} from 'react';

const SponsorsPage = () => {
    // const data = [
    //     { id: 1, name: "John", age: 30 },
    //     { id: 2, name: "ko", age: 15 },
    //     { id: 3, name: "k", age: 21 }
    // ];
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
                Sponsors
            </h1>
                  
            {/* <table style={{color:themeObj.dark.palette.accent.main}}>
                <thead style={{color:themeObj.dark.palette.accent.main}}>
                    <tr style={{color:themeObj.dark.palette.accent.main}}>
                        <th style={{color:themeObj.dark.palette.accent.main}}>ID</th>
                        <th style={{color:themeObj.dark.palette.accent.main}}>Name</th>
                        <th style={{color:themeObj.dark.palette.accent.main}}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr style={{color:themeObj.dark.palette.accent.main}}> 
                            <td key={item.id} style={{color:themeObj.dark.palette.accent.main}}></td>
                            <td key={item.name} style={{color:themeObj.dark.palette.accent.main}}></td>
                            <td key={item.age} style={{color:themeObj.dark.palette.accent.main}}></td>
                        </tr>
                    ))}
                </tbody>   
            </table> */}
            <div style={{display:"flex", justifyContent:"center", alignItems: "center", margin:"10vh"}}>
                <img src={sponsorInfo} alt="Sponsor Info" style={{maxWidth:"90%"}}/>
            </div>

            <a href="https://drive.google.com/drive/folders/1ljtLf6Iww6sjgUNMTVPjhE74XMIhMZjP" target="_blank" style={{color:themeObj.dark.palette.accent.main}}> Prospectus</a>  
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
