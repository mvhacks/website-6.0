import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
  </Layout>
);

export const Head = () => (
  <Seo
    title="404: Not Found"
    children={undefined}
  />
);

export default NotFoundPage;
