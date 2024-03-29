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
import DateBanner from '../components/dateBanner';

import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Link } from "@chakra-ui/react";

const IndexPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Seo
          title="Home"
          children={undefined}
        />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>This Website Is Not Updated</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>This websited used our old url and is no longer updated. Please visit our new and improved website (mvhacks.dev) for the latest information.</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' variant="solid">
              <Link href="https://mvhacks.dev" isExternal>
                Go to mvhacks.dev
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
            <a href="https://forms.gle/ivGpBxPEDeNZ2JaM6" target='_blank'>Apply for the 7.0 team!</a>
          </Button>
          <div style={{padding: "10vh"}}></div>
          <DateBanner></DateBanner>
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
