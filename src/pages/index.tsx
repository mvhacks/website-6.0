import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import './index.scss';
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/customTheme';

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ];

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ];

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ];

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

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
        <div className='textCenter'>
          <div id='backgroundText'>
            2023
            <div id='foregroundText'>MV Hacks 5.0</div>
            <div id='subtitle'>
              The hackathon for everyone. Especially beginners.
            </div>
          </div>
          <Button
            variant='solid'
            id='applyButton'
            _hover={{ bg: 'blue.500', color: ' white' }}
          >
            <a href='#'>Apply today!</a>
          </Button>
        </div>

        {/* <ul className={styles.list}>
          {links.map(link => (
            <li key={link.url} className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={`${link.url}${utmParameters}`}
              >
                {link.text} ↗
              </a>
              <p className={styles.listItemDescription}>{link.description}</p>
            </li>
          ))}
        </ul>
        {moreLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <a href={`${link.url}${utmParameters}`}>{link.text}</a>
            {i !== moreLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))} */}
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
