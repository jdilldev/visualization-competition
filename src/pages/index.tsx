// Step 1: Import React
import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles.scss'
import './Infographic'
import Infographic from './Infographic';

// Step 2: Define your component
const IndexPage = ({ data }) => {

  return (
    <main>
      <Infographic data={data} />
    </main>
  );
};
// Step 3: Export your component
export default IndexPage;

export const query = graphql`
  {
    allMovies: allMoviesJson(sort: {order: ASC, fields: year}) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    genres: allMoviesJson(sort: {order: ASC, fields: genre}) {
      distinct(field: genre)
    }
    totalFail0: allMoviesJson(
      filter: {rating: {eq: 0}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    totalFail1: allMoviesJson(
      filter: {rating: {eq: 1}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    totalFail2: allMoviesJson(
      filter: {rating: {eq: 2}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    totalPass: allMoviesJson(
      filter: {rating: {eq: 3}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1900: allMoviesJson(
      filter: {year: {gte: 1900, lt: 1910}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1910: allMoviesJson(
      filter: {year: {gte: 1910, lt: 1920}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1920: allMoviesJson(
      filter: {year: {gte: 1920, lt: 1930}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1930: allMoviesJson(
      filter: {year: {gte: 1930, lt: 1940}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1940: allMoviesJson(
      filter: {year: {gte: 1940, lt: 1950}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1950: allMoviesJson(
      filter: {year: {gte: 1950, lt: 1960}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1960: allMoviesJson(
      filter: {year: {gte: 1960, lt: 1970}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1970: allMoviesJson(
      filter: {year: {gte: 1970, lt: 1980}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1980: allMoviesJson(
      filter: {year: {gte: 1980, lt: 1990}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade1990: allMoviesJson(
      filter: {year: {gte: 1990, lt: 2000}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade2000: allMoviesJson(
      filter: {year: {gte: 2000, lt: 2010}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade2010: allMoviesJson(
      filter: {year: {gte: 2010, lt: 2020}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
    decade2020: allMoviesJson(
      filter: {year: {gte: 2020, lt: 2030}}
      sort: {order: ASC, fields: year}
    ) {
      totalCount
      nodes {
        imdbid
        rating
        title
        year
        country_of_origin
        genre
      }
    }
  }
`
