import * as React from 'react';
import {graphql} from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'


const BlogPage = ({data}) => {
  return (
    <div >
      <p>My cool posts will go in here</p>

    </div>
  );
};
/* 
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  } 
`*/
export default BlogPage