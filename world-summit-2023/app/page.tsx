'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Grid, Text, Button, Container } from '@nextui-org/react';
import { Dropdown } from "@nextui-org/react";
import { Wow } from '../components/Shared';
import Example from "../components/Example"
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import mapboxgl, { Map } from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { ArwesThemeProvider, StylesBaseline, Text as ArwesText, Figure, FrameCorners, FrameHexagon, FrameLines } from '@arwes/core';


mapboxgl.accessToken = 'pk.eyJ1IjoiamRpbGxkZXYiLCJhIjoiY2xjbHR0MXNtOXE3ZTN2cGx1YWwxYmE4cyJ9.UKQMbbf2Q4revc3Nz9ws3g';

const inter = Inter({ subsets: ['latin'] })

type GridProps = {
  children: React.ReactNode
  className: string
}

const themes: string[] = ['Accelerating Development and Governance', 'Global City Design and Sustainability', 'Exploring the Frontiers', 'Governing Economic Resilience and Connectivity', 'Future of Societies and Healthcare', 'Prioritizing Learning and Work']

mapboxgl.accessToken = 'pk.eyJ1IjoiamRpbGxkZXYiLCJhIjoiY2xjbHR0MXNtOXE3ZTN2cGx1YWwxYmE4cyJ9.UKQMbbf2Q4revc3Nz9ws3g';

const Home = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current && mapContainer) return; // initialize map only once
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
      });
    }
  });

  return (
    <ArwesThemeProvider>
      <Grid className='h-[150vh] md:h-[130vh] lg:h-full flex flex-col gap-2 w-full'>
        <Grid className='h-32'>Themes</Grid>
        <Grid className='h-full'>
          <Grid className='gap-3 lg:flex lg:flex-row h-full'>
            <Grid className='gap-3 lg:flex lg:flex-row w-full h-full'>
              <Grid className='flex flex-wrap flex-row gap-3 md:justify-between h-[40%] w-full  md:h-[37.5%] lg:flex-nowrap lg:h-full lg:flex-col lg:w-1/3'>
                <Grid className='w-full h-1/4 md:w-[48%] md:h-2/3 lg:w-full lg:h-2/6'>
                  <ParentSize>{({ width, height }) =>
                  (<FrameCorners showContentLines cornerLength={50} cornerWidth={3} style={{ width: width, height: height, }} animator={{ animate: false }}>
                    <Example width={width - 20} height={height - 20} />
                  </FrameCorners>)
                  }</ParentSize>
                  {/*<ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>*/}              </Grid>
                <Grid className='w-full h-1/2 md:w-1/2 md:h-2/3 lg:w-full lg:h-1/2'>
                  <FrameCorners showContentLines cornerLength={50} cornerWidth={3} style={{ width: '100%', height: '100%' }} animator={{ animate: false }}>
                    Chart II
                    {/*                 <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>*/}
                  </FrameCorners>
                </Grid>
                <Grid className='w-full h-[20%] md:h-[30%] md:w-full lg:h-1/6'>
                  <FrameHexagon hover palette='secondary' squareSize={60} lineWidth={3} animator={{ animate: false }} style={{ width: '100%', height: '100%' }}>
                    <p className='ml-10'>hi</p>
                  </FrameHexagon>
                </Grid>
              </Grid>
              <Grid className='h-[10%] md:h-[12.5%] lg:hidden  bg-teal-500 mb-3'>
                okra
              </Grid>
              <Grid className='gap-3 flex flex-col h-1/2 lg:h-full lg:w-2/3'>
                <Grid className='h-3/4 bg-gray-600'>
                  mapbox
                </Grid>
                <Grid className='h-1/4 bg-red-500'>Visual Info</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className='hidden lg:block lg:h-24 border-2 border-pink-600 bg-fuchsia-700'>Summary</Grid>
      </Grid>
    </ArwesThemeProvider>
  )
}

export default Home