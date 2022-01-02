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
  //const passPercentage = (100 * dataObject.moviesThatPass.totalCount / dataObject.total.totalCount).toFixed(2)
  const [showRules, toggleRules] = React.useState(false)
  const [barTypeSelect, setBarType] = React.useState('normalized')
  const [genreSelect, setGenreRange] = React.useState('popular')
  const [lineChartSelect, setLineChartType] = React.useState('by decade')

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
        <VintageCamera style={{ cursor: 'pointer', pointerEvents: 'stroke', marginLeft: '10px', marginRight: '20px', minWidth: '170px', maxWidth: '170px', maxHeight: '100%', }} onClick={() => toggleRules(!showRules)} />
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
          <PassFailSunburst data={getSunData(data)} />
          <div style={{ width: '35%', marginLeft: '10px' }}>
            <StackedRatingChart data={getStackedBarData(data, barTypeSelect)} type={barTypeSelect} />
            <select value={barTypeSelect} onChange={(e) => setBarType(e.target.value)}>
              <option value={'normalized'}>normalized</option>
              <option value='relative'>relative</option>
            </select>
          </div>
          <div style={{ width: '35%', marginLeft: '10px', }}>
            <OverTimeLineChart data={getLineData(data, lineChartSelect)} lineChartType={lineChartSelect} lineChartUpdate={(val) => setLineChartType(val)} />
          </div>
        </div>
        <div className="flex-row film-border"  >
          <CountryOfOriginChloropleth />
          <div style={{ width: '40%', marginLeft: '10px', marginTop: '-20px' }}>
            <GenreRadialChart data={getRadialData(data, genreSelect)} genreRange={genreSelect} />
            <select value={genreSelect} onChange={(e) => setGenreRange(e.target.value)}>
              <option value={'popular'}>popular ({">"} 700 data points)</option>
              <option value='mid-range'>mid-range (100 {"<"} data points {"<"} 700)</option>
              <option value='least-common'>least common ({"<"} 60 data points)</option>
              <option value='all'>all data points</option>
            </select>
          </div>
        </div>
      </div>
    </main >
  );
};

export default Infographic;

const getSunData = (data) => ({
  "name": "nivo",
  "children": [
    {
      "name": "pass",
      "color": "hsl(219, 70%, 50%)",
      "val": data.totalPass.totalCount as number,
    },
    {
      "name": "fail",
      "children": [
        {
          "name": "0",
          "color": "hsl(289, 70%, 50%)",
          "val": data.totalFail0.totalCount as number,
        },
        {
          "name": "1",
          "color": "hsl(103, 70%, 50%)",
          "val": data.totalFail1.totalCount as number,
        },
        {
          "name": "2",
          "color": "hsl(103, 70%, 50%)",
          "val": data.totalFail2.totalCount as number,
        }
      ]
    },
  ]
})

const getStackedBarData = (data, type) => {
  interface StackedBarDataPoint {
    'decade': string,
    'One or no women': number
    'No female convo': number
    'Only discuss men': number,
    'Pass': number
  }

  const dataArray: StackedBarDataPoint[] = []

  Array<string>('1900', '1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020').forEach(decade => {
    const decadeString = 'decade' + decade

    const zero = type === 'normalized' ? Math.round(data[decadeString].nodes.filter((movie) => movie.rating === 0).length / data[decadeString].totalCount * 100) : data[decadeString].nodes.filter((movie) => movie.rating === 0).length
    const one = type === 'normalized' ? Math.round(data[decadeString].nodes.filter((movie) => movie.rating === 1).length / data[decadeString].totalCount * 100) : data[decadeString].nodes.filter((movie) => movie.rating === 1).length
    const two = type === 'normalized' ? Math.round(data[decadeString].nodes.filter((movie) => movie.rating === 2).length / data[decadeString].totalCount * 100) : data[decadeString].nodes.filter((movie) => movie.rating === 2).length
    const pass = type === 'normalized' ? Math.round(data[decadeString].nodes.filter((movie) => movie.rating === 3).length / data[decadeString].totalCount * 100) : data[decadeString].nodes.filter((movie) => movie.rating === 3).length

    dataArray.push({ decade: decade, "One or no women": zero, "No female convo": one, "Only discuss men": two, "Pass": pass })
  });

  return dataArray
}

const getLineData = (data, lineChart) => {
  interface LineChartDataPoint {
    'id': string,
    'data': { "x": string, "y": number }[]
  }

  const dataArray: LineChartDataPoint[] = []
  let yearData = []

  Array<string>('1900', '1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020').forEach((decade, count) => {
    const decadeAsInt = parseInt(decade)
    const decadeString: string = 'decade' + decade
    const ratingSumForDecade: number = (data[decadeString].nodes.reduce((a, b) => ({ rating: a.rating + b.rating }))).rating
    const totalMoviesForDecade: number = data[decadeString].totalCount;
    const avgRatingForDecade = Math.round(((ratingSumForDecade / totalMoviesForDecade) + Number.EPSILON) * 100) / 100
    const passingForDecade = (data[decadeString].nodes.filter(movie => movie.rating === 3)).length
    let avgRatingForYear = 0

    if (lineChart === 'by year of decade') yearData = []

    if (lineChart === 'by decade') {
      yearData.push({ 'x': decade, 'y': avgRatingForDecade });
    }

    if (lineChart === 'by year of decade') {
      Array<string>('0', '1', '2', '3', '4', '5', '6', '7', '8', '9').forEach((yearInDecade, index) => {
        const moviesInYear = data[decadeString].nodes.filter(movie => movie.year === (decadeAsInt + index))
        if (moviesInYear.length > 0) {
          const ratingSumForYear = (moviesInYear.reduce((a, b) => ({ rating: a.rating + b.rating }))).rating
          const totalMoviesForYear: number = moviesInYear.length;
          avgRatingForYear = Math.round(((ratingSumForYear / totalMoviesForYear) + Number.EPSILON) * 100) / 100
          const passingForYear = moviesInYear.filter(movie => movie.rating === 3).length
        }

        if (decade !== '2020' || (parseInt(yearInDecade) < 2)) // don't add data for years beyond 2021 because it doesn't exist
          yearData.push({ 'x': yearInDecade, 'y': avgRatingForYear })

      })
      if (lineChart === 'by year of decade') dataArray.push({ id: decade, data: yearData })

    }

  })

  if (lineChart === 'by decade') dataArray.push({ id: 'm', data: yearData })

  return dataArray;
}

const getRadialData = (data, genreRange) => {
  interface RadialDataPoint {
    "id": string,
    "data": { "x": string, "y": number }[] //pass and fail
  }
  const dataArray: RadialDataPoint[] = []

  data.genres.distinct.forEach(genre => {
    const genreArray = []
    if (genre !== 'undefined') {
      const genreTotal = data.allMovies.nodes.filter(movie => genre === movie.genre).length
      const genrePass = data.allMovies.nodes.filter(movie => movie.genre === genre && movie.rating === 3).length
      const genreFail0 = data.allMovies.nodes.filter(movie => movie.genre === genre && movie.rating === 0).length
      const genreFail1 = data.allMovies.nodes.filter(movie => movie.genre === genre && movie.rating === 1).length
      const genreFail2 = data.allMovies.nodes.filter(movie => movie.genre === genre && movie.rating === 2).length

      genreArray.push({ x: 'One or no women', y: genreFail0 })
      genreArray.push({
        x: 'No female convo', y: genreFail1
      })
      genreArray.push({ x: 'Only discuss men', y: genreFail2 })
      genreArray.push({ x: 'Pass', y: genrePass })

      switch (genreRange) {
        case 'popular':
          if (genreTotal > 700)
            dataArray.push({ id: genre, data: genreArray })
          break;
        case 'mid-range':
          if (genreTotal > 100 && genreTotal < 700)
            dataArray.push({ id: genre, data: genreArray })
          break;
        case 'least-common':
          if (genreTotal < 60)
            dataArray.push({ id: genre, data: genreArray })
          break
        case 'all':
          dataArray.push({ id: genre, data: genreArray })
          break
      }
    }

  });

  // return the data array sorted such that the genre with the most data points is the outermost ring
  return dataArray.sort((a, b) => (a.data.reduce((a, b) => a + (b['y'] || 0), 0) < b.data.reduce((a, b) => a + (b['y'] || 0), 0) ? -1 : ((a.data.reduce((a, b) => a + (b['y'] || 0), 0) > b.data.reduce((a, b) => a + (b['y'] || 0), 0)) ? 1 : 0)))

}
