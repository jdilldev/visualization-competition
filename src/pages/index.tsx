// Step 1: Import React
import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles.scss'

// Step 2: Define your component
const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
  site(siteMetadata: {}) {
    siteMetadata {
      title
    }
  }
}
  `);

  return (
    <main>
      <title>{data.site.siteMetadata.title}</title>
      <Link to="/Infographic">Visualization
      </Link>
    </main>
  );
};
// Step 3: Export your component
export default IndexPage;
