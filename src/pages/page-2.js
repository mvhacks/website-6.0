import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../components/page-2.module.css";

import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const SecondPage = () => (
  <Layout>
    <h1 className={styles.titleStyle}>FAQ</h1>
    <Accordion allowToggle allowMultiple style={{ marginBottom: 100 }}>
      <Grid templateColumns="repeat(auto-fit, 60vh)" gap={6} className={styles.gridParent}>
        {/* useful site to explain centering: https://developer.mozilla.org/en-US/docs/Web/CSS/repeat */}
        <GridItem>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.buttonStyling}>
                <Box flex='1' className={styles.boxStyling}>
                  What is a hackathon?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              A hackathon is a competitive educational event in which students come together to develop an idea for a project
              into a real product. MVHacks will provide hackers with educational resources,
              including seminars and mentors, and an environment that will enable their success.
            </AccordionPanel>
          </AccordionItem>
        </GridItem>

        <GridItem>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.buttonStyling}>
                <Box flex='1' className={styles.boxStyling}>
                  How much does it cost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              It is completely free! All food, swag, and prizes are provided at no charge.
            </AccordionPanel>
          </AccordionItem>
        </GridItem>

        <GridItem>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.buttonStyling}>
                <Box flex="1" className={styles.boxStyling}>
                  Do I need programming experience?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              No - this is a fantastic learning opportunity! Hackers can expect to be able to attend
              educational workshops run by industry professionals in addition to experienced adult mentors
              to help them learn and succeed.
            </AccordionPanel>
          </AccordionItem>
        </GridItem>

        <GridItem>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.buttonStyling}>
                <Box flex='1' className={styles.boxStyling}>
                  Who can attend?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              All high school students are eligible to attend MVHacks as hackers.
              Interested in attending but not a high school student? Consider signing up to be a mentor.
            </AccordionPanel>
          </AccordionItem>
        </GridItem>

      </Grid>
    </Accordion>

    {/* <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link> */}
  </Layout >
);

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
