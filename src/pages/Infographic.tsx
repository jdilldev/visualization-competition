import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { PassFailSunburst, SingleYearWaffleChart, StackedRatingChart, GenreRadialChart, OverTimeLineChart, CountryOfOriginChloropleth } from "../Charts";
import { removeDefaultValues } from "gatsby-plugin-sharp/plugin-options";
import VintageCamera from '../svgs/rules-theater.svg'
import WomenTalking from '../svgs/women-chatting.svg'
const Infographic = ({ data }) => {
	console.log(data);
	//const passPercentage = (100 * dataObject.moviesThatPass.totalCount / dataObject.total.totalCount).toFixed(2)

	const [showRules, toggleRules] = React.useState(false)
	return (
		<main>
			<div style={{ display: 'flex' }}>
				<svg width={'500px'}>
					<text>
						<tspan x={15} y={90} fill="goldenrod" fontFamily="Zen Tokyo Zoo" fontSize={'4.5em'}>The Bechdel Test</tspan>
					</text>
				</svg>
			</div>
			<div style={{ display: 'flex', alignContent: 'flex-start', marginTop: '-50px' }}>
				<div className="title-content" >
					<h3>Data Viz Competition | DataConnect Conference 2021</h3>
					<h5>Jasmine Dillard, Computer Scientist </h5>
					<h5> Maryland, USA</h5>
				</div>
				<VintageCamera style={{ cursor: 'pointer', pointerEvents: 'stroke', marginTop: '-100px', marginLeft: '10px', marginRight: '10px' }} onMouseEnter={(e) => console.log(e)} onClick={() => toggleRules(!showRules)} />
				{showRules && <div className="bechdel-rules">
					<div style={{ width: '90%' }}>
						<h2>Bechdel Test</h2>
						<ol>
							<li>Movie contains at least two women</li>
							<li>Who talk to each other</li>
							<li> About something other than men</li>
						</ol>
					</div>

					<WomenTalking />
				</div>}
			</div>
			<div className="flex-column">
				<div className="flex-row chart-row">
					<PassFailSunburst />
					<StackedRatingChart />
					<OverTimeLineChart />
				</div>
				<div className="flex-row chart-row">
					<CountryOfOriginChloropleth />
					<GenreRadialChart />
					<div style={{ width: '30%' }}>datatable</div>
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
