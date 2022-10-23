import * as React from "react";
import "./faq.scss";

import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Dropdown from "../components/dropdown";

const Faq = () => (
  <Layout>
    <h1 className="titleStyle">FAQ</h1>
    <Grid templateColumns="repeat(auto-fit, 60vh)" gap={6} className="gridParent">
      <GridItem>
        <Dropdown
          title="What is a hackathon?"
          content={
            <span>
              A hackathon is a competitive educational event in which students come together to develop an idea for a project
              into a real product. MVHacks will provide hackers with educational resources,
              including seminars and mentors, and an environment that will enable their success.
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title="How much does it cost?"
          content={
            <span>
              It is completely free! All food, swag, and prizes are provided at no charge.
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title="Do I need programming experience?"
          content={
            <span>
              No - this is a fantastic learning opportunity! Hackers can expect to be able to attend
              educational workshops run by industry professionals in addition to experienced adult mentors
              to help them learn and succeed.
            </span>
          }
        />
      </GridItem>

      <GridItem>
        <Dropdown
          title="Who can attend?"
          content={
            <span>
              All high school students are eligible to attend MVHacks as hackers.
              Interested in attending but not a high school student? Consider signing up to be a mentor.
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
