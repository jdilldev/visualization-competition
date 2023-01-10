'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Grid, Text, Button, Container } from '@nextui-org/react';
import { Dropdown } from "@nextui-org/react";
import { Wow } from '../components/Shared';
import Example from "../components/Example"
import ParentSize from '@visx/responsive/lib/components/ParentSize';

const inter = Inter({ subsets: ['latin'] })

type GridProps = {
  children: React.ReactNode
  className: string
}

const themes: string[] = ['Accelerating Development and Governance', 'Global City Design and Sustainability', 'Exploring the Frontiers', 'Governing Economic Resilience and Connectivity', 'Future of Societies and Healthcare', 'Prioritizing Learning and Work']


const Home = () => {



  return (
    <Grid className='flex flex-col gap-5 h-full border-2 border-indigo-600'>
      <Grid style={{ height: '10vh', maxHeight: '10vh' }} className='border-2 border-orange-600'>one</Grid>
      <Grid style={{ height: '80vh', maxHeight: '80vh' }} className='border-2 border-yellow-600'>
        <Grid className='flex flex-row h-full bg-blue-600'>
          <Grid className='flex flex-row w-full'>
            <Grid className='flex flex-col w-1/3'>
              <Grid className='h-2/5 bg-orange-400'>
                <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize>
              </Grid>
              <Grid className='h-1/2'>
                base
              </Grid>
              <Grid className='h-1/5 bg-purple-500'>
                mooth
              </Grid>
            </Grid>
            <Grid className='flex flex-col w-2/3 bg-red-200'>
              <Grid className='h-3/4 bg-gray-600'>
                mapbox
              </Grid>
              <Grid className='h-1/4 bg-red-500'>love</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className='h-fit border-2 border-pink-600'>end</Grid>
    </Grid>

  )
}

export default Home