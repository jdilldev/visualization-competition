import { Grid, Text, Container } from '@nextui-org/react';
import { FrameLines } from '@arwes/core';

type StatBoxProps = {
    isDesktop: boolean
}

export const StatBoxes = () => {
    return (
        <Grid className='flex gap-4 justify-between h-[10%] md:h-[12.5%] lg:h-48'>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
            <FrameLines palette='secondary' className='w-1/4 h-full' animator={{ animate: false }} hover largeLineWidth={2} smallLineWidth={4} smallLineLength={20}>
            </FrameLines>
        </Grid>)
}