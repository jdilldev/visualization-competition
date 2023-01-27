import { Grid, } from '@nextui-org/react';
import { FrameLines } from '@arwes/core';
import Lightbulb from '../public/icons/brain.svg'

const DefaultStatBox = ({ partOne, partTwo }: { partOne: string, partTwo: string }) => {
    return <FrameLines palette='secondary' className='w-1/4 h-full flex flex-col justify-between' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
        {partOne !== '' ? <p className='w-12 h-12 font-nebula text-3xl'>{partOne}</p> : <Lightbulb className='w-16 h-12 pb-2 fill-[#9fd0dcb1]' />}
        <p className='font-nebula lg:whitespace-nowrap text-sm md:text-base'>{partTwo}</p>
    </FrameLines >
}

export const StatBoxes = () => {
    return (
        <Grid className='flex gap-4 justify-between h-[10%] md:h-[12.5%] lg:h-[20%]'>
            <DefaultStatBox partOne='13' partTwo='Subregions' />
            <DefaultStatBox partOne='174' partTwo='Countries' />
            <DefaultStatBox partOne='6' partTwo='Themes' />
            <DefaultStatBox partOne='' partTwo='Endless Insights' />

        </Grid>)
}