'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Grid, Text, Container } from '@nextui-org/react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { FrameCorners, FrameHexagon } from '@arwes/core';
import Map, { GeolocateControl } from "react-map-gl";
import Example from "../components/Example"
import { useDesktop } from './hooks/hooks';
// assets
import Economy from '../public/icons/global-economy.svg'
import SustainableWorld from '../public/icons/global-sustainability.svg'
import Health from '../public/icons/global-health.svg'
import Education from '../public/icons/global-education.svg'
import Exploring from '../public/icons/global-connectivity.svg'
import Development from '../public/icons/009-overpopulation.svg'
import { StatBoxes } from '../components/StatBoxes';
import { HexagonFrame } from '../components/HexagonFrame';
const bag2 = "./starry-mountain-bg.jpg"

const worldSummitThemes: { name: string, icon: any }[] = [
  { name: 'Accelerating Development and Governance', icon: Development },
  { name: 'Global City Design and Sustainability', icon: SustainableWorld },
  { name: 'Exploring the Frontiers', icon: Exploring },
  { name: 'Governing Economic Resilience and Connectivity', icon: Economy },
  { name: 'Future of Societies and Healthcare', icon: Health },
  { name: 'Prioritizing Learning and Work', icon: Education }
]

const Home = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  //const map = useRef<Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [mapHeight, setMapHeight] = useState(0)
  const [selectedTheme, setSelectedTheme] = useState('Please select a theme')
  const isDesktop = useDesktop()

  useEffect(() => {
    if (mapContainer.current) {
      setMapHeight(mapContainer.current.clientHeight)
    }
  });

  console.log(mapHeight)
  return (
    <Grid className='h-[150vh] md:h-[130vh] lg:h-full flex flex-col gap-2 w-full bg-bottom bg-no-repeat bg-cover' style={{ backgroundImage: `url(${'bag2'})` }}>
      <Grid className='h-40 md:h-48 flex justify-center'>
        <Grid style={{ backgroundImage: `url(${'bag2'})` }} className='flex flex-col pt-2 px-1 border-solid border-l-2 border-r-2 border-b-2  border-[#002439] backdrop-blur-lg gap-3 fixed top-0 z-10  w-[87%] md:w-[90%] items-center lg:w-full lg:gap-1 lg:border-none'>
          <p className='tracking-[.3em] md:tracking-[.7em] text-slate-300 text-md md:text-2xl lg:text-3xl uppercase font-equinox'>{`The Present Future`}</p>
          <p className='tracking-[.5em] text-xl uppercase font-dreamscape text-[#78CCE2]'>{`Themes`}</p>
          <Grid className='flex pb-1 md:pb-2 no-wrap justify-evenly w-full gap-4 md:gap-6 lg:flex-wrap lg:justify-evenly lg:gap-4 2xl:gap-18'>
            {worldSummitThemes.map(worldSummitTheme => isDesktop ? <div
              className={`hidden lg:h-8 lg:inline  ${worldSummitTheme.name === selectedTheme ? 'box text-[#3297b3a8]' : 'text-slate-500'}`}
              onClick={() => setSelectedTheme(worldSummitTheme.name)}>
              <p className={`text-md lowercase font-equinox hover:text-[#3297b3a8] ${worldSummitTheme.name === selectedTheme ? 'uppercase tracking-widest ' : ''}`}>{worldSummitTheme.name}</p>
            </div> : <worldSummitTheme.icon
              onClick={() => setSelectedTheme(worldSummitTheme.name)}
              className={`w-[40px] h-[50px] md:w-[70px] md:h-[70px] stroke-2 fill-slate-400 hover:fill-[#3297b3a8] ${worldSummitTheme.name === selectedTheme ? 'fill-[#3297b3a8]' : ''}`} />
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid className='h-full'>
        <Grid className='flex gap-3 lg:flex lg:flex-row h-full'>
          <Grid className='flex flex-col gap-4 lg:flex lg:flex-row w-full h-full'>
            {!isDesktop && <StatBoxes />}
            <Grid className='flex flex-wrap flex-row gap-3 md:justify-between h-[40%] w-full  md:h-[37.5%] lg:flex-nowrap lg:h-full lg:flex-col lg:w-1/3'>
              <Grid className='w-full h-1/4 md:w-[40%] md:h-2/3 lg:w-full lg:h-2/6'>
                <ParentSize>{({ width, height }) =>
                (<FrameCorners showContentLines cornerLength={50} cornerWidth={3} style={{ width: width, height: height, }} animator={{ animate: false }}>
                  {/* <Example width={width - 20} height={height - 20} />*/}
                </FrameCorners>)
                }</ParentSize>
                {/*<ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>*/}              </Grid>
              {isDesktop && <HexagonFrame />}
              <Grid className='w-full h-1/2 md:basis-[58%] md:h-2/3 lg:w-full lg:h-1/2'>
                <FrameCorners showContentLines cornerLength={50} cornerWidth={3} className='h-full w-full' animator={{ animate: false }}>
                </FrameCorners>
              </Grid>
              {!isDesktop && <HexagonFrame />}
            </Grid>

            <Grid className='gap-3 flex flex-col h-1/2 lg:h-full lg:w-2/3'>
              {isDesktop && <StatBoxes />}
              <Grid className='h-[60%]'>
                <Grid ref={mapContainer} className={`border-solid border-3 border-cyan-500 h-full max-h-[${mapHeight}px]  w-full`}>
                  <FrameCorners
                    showContentLines
                    className='h-full w-full flex'
                    animator={{ animate: false }}
                    contentLineWidth={3}
                    cornerWidth={3}
                    cornerLength={50}
                  >
                    <Map
                      mapboxAccessToken='pk.eyJ1IjoiamRpbGxkZXYiLCJhIjoiY2xjbHR0MXNtOXE3ZTN2cGx1YWwxYmE4cyJ9.UKQMbbf2Q4revc3Nz9ws3g'
                      initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3.5,
                      }}
                      attributionControl={false}
                      style={{ width: '100%', height: mapHeight - 20 + 'px' }}
                      mapStyle="mapbox://styles/mapbox/streets-v11"
                      onRender={(event) => {
                        if (mapContainer.current)
                          setMapHeight(mapContainer.current.clientHeight)

                        return event.target.resize()
                      }
                      }
                    />
                  </FrameCorners>
                </Grid>
              </Grid>
              <Grid className='h-[20%]'>
                <FrameHexagon hover inverted palette='secondary' squareSize={60} lineWidth={3} animator={{ animate: false }} className='h-full w-full' >

                </FrameHexagon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    </Grid >
  )
}

export default Home