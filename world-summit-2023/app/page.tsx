'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Grid, Text, Container } from '@nextui-org/react';
import { Dropdown } from "@nextui-org/react";
import { Wow } from '../components/Shared';
import Example from "../components/Example"
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import mapboxgl, { Map } from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { ArwesThemeProvider, StylesBaseline, Text as ArwesText, Figure, FrameUnderline, FrameCorners, FrameHexagon, FrameLines, Button, Card } from '@arwes/core';
import { url } from 'inspector';
import img from '../public//Users/jaszy/Workspace/visualization-competitions/world-summit-2023/public/starry-mountain-bg.jpg'
import { useTheme } from '@emotion/react';

mapboxgl.accessToken = 'pk.eyJ1IjoiamRpbGxkZXYiLCJhIjoiY2xjbHR0MXNtOXE3ZTN2cGx1YWwxYmE4cyJ9.UKQMbbf2Q4revc3Nz9ws3g';

const inter = Inter({ subsets: ['latin'] })

type GridProps = {
  children: React.ReactNode
  className: string
}

const worldSummitThemes: string[] = ['Accelerating Development and Governance', 'Global City Design and Sustainability', 'Exploring the Frontiers', 'Governing Economic Resilience and Connectivity', 'Future of Societies and Healthcare', 'Prioritizing Learning and Work']

mapboxgl.accessToken = 'pk.eyJ1IjoiamRpbGxkZXYiLCJhIjoiY2xjbHR0MXNtOXE3ZTN2cGx1YWwxYmE4cyJ9.UKQMbbf2Q4revc3Nz9ws3g';
const bag2 = "./starry-mountain-bg.jpg"



const Home = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [selectedTheme, setSelectedTheme] = useState('')
  const colorTheme = useTheme()

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
      <Grid className='h-32 flex justify-between'>
        <Grid className='flex flex-col items-center w-full'>
          <p className='tracking-[1em] text-3xl uppercase'>Themes</p>
          <Grid className='flex flex-wrap lg:justify-evenly lg:gap-4 2xl:gap-18'>
            {worldSummitThemes.map(worldSummitTheme => <Button
              className={`hidden lg:h-8 lg:inline ${worldSummitTheme === selectedTheme ? colorTheme.palette.primary.light3 : ''}`}
              FrameComponent={FrameCorners}
              onClick={() => setSelectedTheme(worldSummitTheme)}>
              <ArwesText>{worldSummitTheme}</ArwesText>
            </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid className='h-full'>
        <Grid className='flex gap-3 lg:flex lg:flex-row h-full'>
          <Grid className='flex flex-col gap-4 lg:flex lg:flex-row w-full h-full'>
            <Grid className='flex flex-wrap flex-row gap-3 md:justify-between h-[40%] w-full  md:h-[37.5%] lg:flex-nowrap lg:h-full lg:flex-col lg:w-1/3'>
              <Grid className='w-full h-1/4 md:w-[40%] md:h-2/3 lg:w-full lg:h-2/6'>
                <ParentSize>{({ width, height }) =>
                (<FrameCorners showContentLines cornerLength={50} cornerWidth={3} style={{ width: width, height: height, }} animator={{ animate: false }}>
                  {/*                     <Example width={width - 20} height={height - 20} />
 */}                  </FrameCorners>)
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
            <Grid className='flex h-[10%] md:h-[12.5%] gap-4 lg:hidden'>
              <FrameLines className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
              </FrameLines>
              <FrameLines className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
              </FrameLines>
              <FrameLines className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
              </FrameLines>
              <FrameLines className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
              </FrameLines>
            </Grid>
            <Grid className='gap-3 flex flex-col h-1/2 lg:h-full lg:w-2/3'>
              <Grid className='hidden lg:flex lg:flex-row lg:gap-4 lg:justify-between lg:h-48'>
                <FrameLines className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
                </FrameLines>
                <FrameLines className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
                </FrameLines>
                <FrameLines className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
                </FrameLines>
                <FrameLines className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
                </FrameLines>
              </Grid>
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
              <Grid className='h-3/4'>
                <Grid className='flex flex-col h-full w-full'>
                  <FrameCorners
                    showContentLines
                    className='h-full w-full flex'
                    animator={{ animate: false }}
                    contentLineWidth={3}
                    cornerWidth={3}
                    cornerLength={50}
                    hover>
                  </FrameCorners>


                </Grid>
              </Grid>
              <Grid className='h-1/4'>
                <FrameHexagon hover inverted palette='primary' squareSize={60} lineWidth={3} animator={{ animate: false }} className='h-full w-full' >

                </FrameHexagon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home