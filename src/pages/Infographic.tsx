import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { PassFailSunburst, SingleYearWaffleChart, StackedRatingChart, GenreRadialChart, OverTimeLineChart, CountryOfOriginChloropleth } from "../Charts";
import { removeDefaultValues } from "gatsby-plugin-sharp/plugin-options";
import VintageCamera from '../../svgs/rules-theater.svg'
import WomenTalking from '../../svgs/women-chatting.svg'
import image from '../images/bechdeltestcartoon.jpeg'

const Infographic = ({ data }) => { return <div></div> }
