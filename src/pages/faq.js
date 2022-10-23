import * as React from "react";
import "./faq.scss";

import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Dropdown from "../components/dropdown";
import { themeObj } from '../utils/customTheme';

const QUESTIONS = [
  "What is a hackathon?", "How much does it cost?", "Do I need programming experience?",
  "Who can attend?", "What do I need?", "Do I need a team?", "What are the rules?",
  "I have other questions!"
];

const ANSWERS = [
  `A hackathon is a competitive educational event in which students come together to develop an idea for a project
      into a real product. MVHacks will provide hackers with educational resources,
      including seminars and mentors, and an environment that will enable their success.`,
  "It is completely free! All food, swag, and prizes are provided at no charge.",
  `No - this is a fantastic learning opportunity! Hackers can expect to be able to attend
      educational workshops run by industry professionals in addition to experienced adult mentors
      to help them learn and succeed.`,
  `All high school students are eligible to attend MVHacks as hackers.
      Interested in attending but not a high school student? Consider signing up to be a mentor.`,
  `For the event, all you need is your school ID, laptop, charger, and a desire to hack!`,
  `Teams of up to 4 are allowed. You may work as an individual, but we recommend collaborating. There will be a team mixer at
       start of the hackathon.`,
  `Be nice, respectful, and have fun! Hackers are expected to behave appropriately and safely at all times, and abide by the MLH Code of Conduct.`,
  `Contact us by email at contact@mv-hacks.com.`
];
const Faq = () => (
  <Layout>
    <h1 className="titleStyle" style={{ color: themeObj.dark.palette.secondary.main }}>FAQ</h1>
    <Grid templateColumns="repeat(auto-fit, 60vh)" gap={6} className="gridParent">
      <GridItem>
        <Dropdown
          title={QUESTIONS[0]}
          content={
            <span>
              {ANSWERS[0]}
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title={QUESTIONS[1]}
          content={
            <span>
              {ANSWERS[1]}
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title={QUESTIONS[2]}
          content={
            <span>
              {ANSWERS[2]}
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title={QUESTIONS[3]}
          content={
            <span>
              {ANSWERS[3]}
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title={QUESTIONS[4]}
          content={
            <span>
              {ANSWERS[4]}
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title={QUESTIONS[5]}
          content={
            <span>
              {ANSWERS[5]}
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title={QUESTIONS[6]}
          content={
            <span>
              {ANSWERS[6]}
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title={QUESTIONS[7]}
          content={
            <span>
              {ANSWERS[7]}
            </span>
          }
        />
      </GridItem>

    </Grid>

    {/* <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link> */}
  </Layout >
);

export const Head = () => <Seo title="Page two" />;

export default Faq;
