import * as React from "react";
import "./about-the-team.scss";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { themeObj } from '../utils/customTheme';

const AboutTheTeam = () => (
    <Layout>
        <h1 style={{ color: themeObj.dark.palette.secondary.main }}>Hi.</h1>
        <h1 className="titleStyle" style={{ color: themeObj.dark.palette.secondary.main }}>this page isn't done yet. please go away.</h1>
    </Layout >
);

export const Head = () => <Seo title="Team" />;

export default AboutTheTeam;
