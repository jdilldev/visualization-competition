'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Grid, Text, Container } from '@nextui-org/react';
import { Dropdown } from "@nextui-org/react";
import { Wow } from '../components/Shared';
import Example from "../components/Example"
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import mapboxgl, { Map } from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { ArwesThemeProvider, StylesBaseline, Text as ArwesText, Figure, FrameUnderline, FrameCorners, FrameHexagon, FrameLines, Button, Card } from '@arwes/core';
import { url } from 'inspector';
import imgy from '../public//Users/jaszy/Workspace/visualization-competitions/world-summit-2023/public/starry-mountain-bg.jpg'
import { useTheme } from '@emotion/react';
import { useDesktop } from './hooks/hooks';
import Economy from '../public/icons/global-economy.svg'
import Space from '../public/icons/global-fronteir.svg'
import SustainableWorld from '../public/icons/global-sustainability.svg'
import Health from '../public/icons/global-health.svg'
import Education from '../public/icons/global-education.svg'
import Exploring from '../public/icons/global-connectivity.svg'
import Development from '../public/icons/009-overpopulation.svg'
import { StatBoxes } from '../components/StatBoxes';
mapboxgl.accessToken = 'pk.eyJ1IjoiamRpbGxkZXYiLCJhIjoiY2xjbHR0MXNtOXE3ZTN2cGx1YWwxYmE4cyJ9.UKQMbbf2Q4revc3Nz9ws3g';


type GridProps = {
  children: React.ReactNode
  className: string
}

const worldSummitThemes: { name: string, icon: any }[] = [
  { name: 'Accelerating Development and Governance', icon: Development },
  { name: 'Global City Design and Sustainability', icon: SustainableWorld },
  { name: 'Exploring the Frontiers', icon: Exploring },
  { name: 'Governing Economic Resilience and Connectivity', icon: Economy },
  { name: 'Future of Societies and Healthcare', icon: Health },
  { name: 'Prioritizing Learning and Work', icon: Education }
]

mapboxgl.accessToken = 'pk.eyJ1IjoiamRpbGxkZXYiLCJhIjoiY2xjbHR0MXNtOXE3ZTN2cGx1YWwxYmE4cyJ9.UKQMbbf2Q4revc3Nz9ws3g';
const bag2 = "./starry-mountain-bg.jpg"



const Home = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [selectedTheme, setSelectedTheme] = useState('Please select a theme')
  const isDesktop = useDesktop()

  /*   useEffect(() => {
      if (map.current && mapContainer) return; // initialize map only once
      if (mapContainer.current) {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
      }
    }); */

  return (
    <Grid className='h-[150vh] md:h-[130vh] lg:h-full flex flex-col gap-2 w-full bg-bottom bg-no-repeat bg-cover' style={{ backgroundImage: `url(${'bag2'})` }}>
      <Grid className='h-36 md:h-48 flex justify-between'>
        <Grid className='flex flex-col gap-3 fixed z-10 top-0 pt-3 items-center w-full lg:gap-1'>
          <p className='tracking-[.7em] md:tracking-[1em] text-slate-300 text-md md:text-2xl lg:text-3xl uppercase font-equinox'>{`The Present Future`}</p>
          <p className='tracking-[.5em] text-xl uppercase font-dreamscape text-[#78CCE2]'>{`Themes`}</p>
          <Grid className='flex pr-4 no-wrap justify-evenly w-full gap-4 md:gap-6 lg:flex-wrap lg:justify-evenly lg:gap-4 2xl:gap-18'>
            {worldSummitThemes.map(worldSummitTheme => isDesktop ? <div
              className={`hidden lg:h-8 lg:inline  ${worldSummitTheme.name === selectedTheme ? 'box text-[#3297b3a8]' : 'text-slate-500'}`}
              onClick={() => setSelectedTheme(worldSummitTheme.name)}>
              <p className={`text-md font-equinox hover:text-[#3297b3a8] ${worldSummitTheme.name === selectedTheme ? 'uppercase tracking-widest ' : ''}`}>{worldSummitTheme.name}</p>
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
              <Grid className='hidden lg:w-full lg:h-[20%]  lg:block'>
                <FrameHexagon hover palette='secondary' squareSize={60} lineWidth={3} animator={{ animate: false }} className='h-full w-full'>
                  <p className='ml-10'>open and close</p>
                </FrameHexagon>
              </Grid>
              <Grid className='w-full h-1/2 md:basis-[58%] md:h-2/3 lg:w-full lg:h-1/2'>
                <FrameCorners showContentLines cornerLength={50} cornerWidth={3} className='h-full w-full' animator={{ animate: false }}>
                </FrameCorners>
              </Grid>
              <Grid className='w-full h-[20%] md:h-[30%] md:w-full lg:hidden'>
                <FrameHexagon hover palette='secondary' squareSize={60} lineWidth={3} animator={{ animate: false }} className='h-full w-full'>
                  <Grid className='ml-10'>hi</Grid>
                </FrameHexagon>
              </Grid>
            </Grid>

            <Grid className='gap-3 flex flex-col h-1/2 lg:h-full lg:w-2/3'>
              {isDesktop && <StatBoxes />}
              <Grid className='h-3/4'>
                <Grid className='flex flex-col h-full w-full'>
                  <FrameCorners
                    showContentLines
                    className='h-full w-full flex'
                    animator={{ animate: false }}
                    contentLineWidth={3}
                    cornerWidth={3}
                    cornerLength={50}
                  >
                  </FrameCorners>


                </Grid>
              </Grid>
              <Grid className='h-1/4'>
                <FrameHexagon hover inverted palette='secondary' squareSize={60} lineWidth={3} animator={{ animate: false }} className='h-full w-full' >

                </FrameHexagon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Home

{/*   <Card
                    className='h-full w-full '
                    image={{
                      src: 'https://ca-times.brightspotcdn.com/dims4/default/34a374e/2147483647/strip/true/crop/7500x3938+0+203/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F85%2Fac%2F4478940d4253803b6725a7ded3dc%2Fnasa-space-telescope-16841.jpg',
                      alt: 'A nebula'
                    }}
                    title='Nebula'
                    options={
                      <Button palette='secondary'>
                        <ArwesText>Learn More</ArwesText>
                      </Button>
                    }
                    landscape
                    hover
                  >
                    <Text>
                      A nebula is an interstellar cloud of dust, hydrogen,
                      helium and other ionized gases. Originally, the term
                      was used to describe any diffused astronomical object,
                      including galaxies beyond the Milky Way.
                    </Text>
                  </Card> */}