import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { themeObj } from '../utils/customTheme';

const Apply = () => {
    return (
    <Layout>
        <h1
        className="titleStyle"
        style={{ color: themeObj.dark.palette.secondary.main }}
        >
        Apply!
        </h1>
        <div>
        <iframe
            title="Google Form"
            src="https://forms.gle/ivGpBxPEDeNZ2JaM6"
            width="50%"
            height="800vh"
            style={{display: 'block', margin: '0 auto'}}
        >
            Loading...
        </iframe>
        </div>   
      </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Apply"
    children={undefined}
  />
);

export default Apply;