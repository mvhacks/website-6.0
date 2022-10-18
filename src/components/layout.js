/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="layout">
        <Navigation />
        <div className="content">
          {children} {/* children just gives a place for all the content that you type within the other pages to show up. w/o this, you'll only see nav bar + footer */}
        </div>
        <footer className="footer">
          <p>center pic here of mvhacks 4.5 winners, instagram, anything else??</p>
        </footer>
      </div>
    </>
  );
};
// old code below :)
//   <Header siteTitle="hi" />
//   <div
//     <Navigation />
//     <h1> hi</h1>
// </div >
// style = {{
//   margin: `0 auto`,
//     maxWidth: `var(--size-content)`,
//       padding: `var(--size-gutter)`,
//         }}
//       >
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `var(--space-5)`,
//             fontSize: `var(--font-sm)`,
//           }}
//         >
//           © {new Date().getFullYear()} &middot; Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer>
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
