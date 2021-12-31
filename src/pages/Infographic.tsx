import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { PassFailSunburst, SingleYearWaffleChart, StackedRatingChart, GenreRadialChart, OverTimeLineChart, CountryOfOriginChloropleth } from "../Charts";
import { removeDefaultValues } from "gatsby-plugin-sharp/plugin-options";
import VintageCamera from '../../svgs/rules-theater.svg'
import WomenTalking from '../../svgs/women-chatting.svg'
import image from '../images/bechdeltestcartoon.jpeg'
const Infographic = ({ data }) => {
	console.log(data);
	//const passPercentage = (100 * dataObject.moviesThatPass.totalCount / dataObject.total.totalCount).toFixed(2)

	const [showRules, toggleRules] = React.useState(false)
	return (
		<main>
			<div style={{ display: 'flex', margin: '10px', maxHeight: '18vh' }}>
				<div style={{ display: 'flex', flexDirection: 'column' }} >
					<svg width={'500px'}>
						<text x={0} y={60} fill="#E9C46A" fontFamily="Zen Tokyo Zoo" fontSize={'4.2em'}>The Bechdel Test
						</text>
					</svg>
					<div style={{ display: 'flex', alignContent: 'flex-start', marginTop: '-80px' }}>
						<div className="title-content" >
							<h3>Data Viz Competition | DataConnect Conference 2021</h3>
							<h5>Jasmine Dillard, Computer Scientist </h5>
							<h5> Maryland, USA</h5>
						</div>
					</div>
				</div>
				<VintageCamera style={{ cursor: 'pointer', pointerEvents: 'stroke', marginLeft: '10px', marginRight: '20px', minWidth: '170px', maxWidth: '170px', maxHeight: '100%', }} onMouseEnter={(e) => console.log(e)} onClick={() => toggleRules(!showRules)} />
				<div className="bechdel-rules">
					{showRules ?
						<div className="movie-screen">
							<div>
								<h2>Bechdel Test</h2>
								<ol>
									<li>Movie contains at least two women</li>
									<li>Who talk to each other</li>
									<li> About something other than men</li>
								</ol>
							</div>
							<WomenTalking />
						</div > : <div className="bechdel-test intro-text" >Hi, how are you? Two years deep in a pandemic means we spent a lot more time indoors. While indoors, it is likely we've consumed content from many of the streaming services that exist. With access to more digital content than ever before, it is interesting to analyze the role women have in pop cultures storytelling. <br /><br />Coined by a <span className="hover_img"><a href="#" className="link-style">comic<span><img height={700} src={image} alt="image" /></span></a></span> by Amy Bechdel in 1985-- the Bechdel test provides a consistent metric to understand understanding how women are portrayed in movies. Common personas are well described <a className="link-style" target="_blank" rel="noopener noreferrer" href="https://www.sheknows.com/entertainment/slideshow/810/female-stereotypes-in-film-that-make-us-yawn/4/">here</a>. Many personas are tied to a love interest (typically a man). This visualizations aims to objectively assess how women are presented.</div>}
				</div>
			</div>
			<div className="flex-column" >
				<div className="flex-row" >
					<PassFailSunburst />
					<StackedRatingChart />
					<OverTimeLineChart />
				</div>
				<div className="flex-row film-border"  >
					<CountryOfOriginChloropleth />
					<GenreRadialChart />
				</div>
			</div>
		</main >
	);
};

export const allQueries = graphql`
	query data {
		total: allMoviesJson(sort: { order: ASC, fields: title }) {
			totalCount
			nodes {
				imdbid
				rating
				title
				year
			}
		}
		year1900: allMoviesJson(filter: { year: { eq: 1900 } }) {
			totalCount
			nodes {
				imdbid
				rating
				title
				year
			}
		}
		year1901: allMoviesJson(filter: { year: { eq: 1901 } }) {
			totalCount
			nodes {
				imdbid
				rating
				title
				year
			}
		}
		year2021: allMoviesJson(
			filter: { year: { eq: 2021 }, rating: { eq: 3 } }
			sort: { order: ASC, fields: title }
		) {
			totalCount
			nodes {
				imdbid
				rating
				title
				year
			}
		}
	}
`;
// Step 3: Export your component
export default Infographic;
