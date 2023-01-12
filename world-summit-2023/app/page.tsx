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
    <Grid className='h-[150vh] md:h-[130vh] lg:h-full flex flex-col gap-2 w-full border-2 border-gray-300'>
      <Grid className='h-32 border-2 border-orange-600'>Themes</Grid>
      <Grid className='h-full border-2 border-blue-600'>
        <Grid className='lg:flex lg:flex-row h-full'>
          <Grid className='lg:flex lg:flex-row w-full h-full'>
            <Grid className='flex flex-wrap flex-row h-[40%] w-full  md:h-[37.5%] lg:flex-nowrap lg:h-full lg:flex-col lg:w-1/3'>
              <Grid className='w-full p-5 h-1/4 md:w-1/2 md:h-2/3 lg:w-full lg:h-2/6 bg-orange-400'>
                {/*                 <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>
 */}              </Grid>
              <Grid className='w-full h-1/2 md:w-1/2 md:h-2/3 lg:w-full lg:h-1/2 bg-green-600'>
                Chart II
                {/*                 <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>*/}
              </Grid>
              <Grid className='w-full h-1/4 md:h-1/3 md:w-full lg:h-1/6 bg-purple-500'>
                Stats
              </Grid>
            </Grid>
            <Grid className='h-[10%] md:h-[12.5%] lg:hidden border-2 border-pink-600 bg-teal-500'>Summary</Grid>
            <Grid className='flex flex-col h-1/2 lg:h-full lg:w-2/3 bg-red-200'>
              <Grid className='h-3/4 bg-gray-600'>
                mapbox
              </Grid>
              <Grid className='hidden lg:block lg:h-40 border-2 border-pink-600 bg-fuchsia-700'>Summary</Grid>
              <Grid className='h-1/4 bg-red-500'>Visual Info</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default Home