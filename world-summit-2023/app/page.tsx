"use client"

import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Grid } from '@nextui-org/react';
import { Button } from "@nextui-org/react";


const inter = Inter({ subsets: ['latin'] })

type GridProps = {
  children: React.ReactNode
  className: string
}

const themes: string[] = ['1', '2', '3', '4', '5', '6']

const hair = 'hair'

const Home = () => {
  return (
    <Grid className='grid grid-cols-6 grid-rows-8 gap-3 h-full'>
      <Grid className='row-span-1 col-start-2 col-span-4 border-solid border-2 border-indigo-600'>Summary</Grid>
      <Grid className='row-span-3 col-start-1 col-span-2 border-solid border-2 border-indigo-600'>Chart I</Grid>
      <Grid className='row-span-5 col-span-4 border-solid border-2 border-indigo-600'>MapGrid</Grid>
      <Grid className='row-span-4 col-start-1 col-span-2 border-solid border-2 border-indigo-600'>Chart II</Grid>
      <Grid className=' row-span-2 col-start-3 col-span-2 border-solid border-2 border-indigo-600'>Chart III</Grid>
      <Grid className=' row-span-2 col-span-2 col-end-7 border-solid border-2 border-indigo-600'>Chart IV</Grid>
      <Grid className='col-start-2 col-span-4 border-solid border-2 border-indigo-600'>
      </Grid>
    </Grid>

  )
}

export default Home