import * as React from 'react';
import './about-the-team.scss';

import people from '../data/teamInfo.json';

import Layout from '../components/layout';
import Seo from '../components/seo';

import { themeObj } from '../utils/customTheme';

const AboutTheTeam = () => (
  <Layout>
    <h1 style={{ color: themeObj.dark.palette.secondary.main }}>Hi.</h1>
    <h1
      className="titleStyle"
      style={{ color: themeObj.dark.palette.secondary.main }}
    >
      this page isn't done yet. please go away.
      <br />
      ok ( first i change some things tho)
    </h1>
    <div className="inner">
      {people &&
        people.map((person, index) => (
          <div
            key={`person-${index}`}
            className="box"
            style={{
              backgroundColor: themeObj.dark.palette.secondary.main,
              color: themeObj.dark.palette.accent.main
            }}
          >
            <img
              src={person.imgSrc}
              style={{ aspectRatio: '1/1', height: '30vh' }}
              alt="profile"
            />
            <h3>{person.name}</h3>
          </div>
        ))}
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
