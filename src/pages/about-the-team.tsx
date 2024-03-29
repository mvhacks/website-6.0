import React from 'react';
import './about-the-team.scss';

import people from '../data/teamInfo.json';

import Layout from '../components/layout';
import Seo from '../components/seo';

import { themeObj } from '../utils/customTheme';
import TeamCards from '../components/teamCards';

const leadTeam = people.filter((a) => a.isDirector == true);
const techTeam = people.filter((a) => a.team == 'tech');
const eventTeam = people.filter((a) => a.team == 'event');
const outreachTeam = people.filter((a) => a.team == 'outreach');

const AboutTheTeam = () => (
  <Layout>
    <div>
      <h1
        className="titleStyle"
        style={{ color: themeObj.dark.palette.secondary.main, marginBottom: '4vh' }}
      >
        About the team!
        <br />
      </h1>
    </div>
    <div className="panels">
      <TeamCards
        people={leadTeam}
        team="Team Leads"
      />
      <TeamCards
        people={techTeam}
        team="Tech Team"
      />
      <TeamCards
        people={eventTeam}
        team="Event Team"
      />
      <TeamCards
        people={outreachTeam}
        team="Outreach Team"
      />
    </div>
  </Layout>
);

export const Head = () => (
  <Seo
    title="Team"
    children={undefined}
  />
);

export default AboutTheTeam;
